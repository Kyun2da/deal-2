import main from './views/pages/main';
import error404 from './views/pages/error404';
import utils from './services/utils';
import login from './views/pages/login';
import './views/styles/pages/common.css';
import category from './views/pages/category';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': main,
  '/login': login,
  '/category': category,
  // '/p/:id': PostShow,
  // '/register': Register,
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  // Lazy load view element:
  const content = null || document.getElementById('root');

  // Get the parsed URl from the addressbar
  const request = utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  const parsedURL =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : error404;
  content.innerHTML = await page.render();
  await page.afterRender();
};

// 해쉬값이 바뀌면 listen:
window.addEventListener('hashchange', router);

// 페이지가 로드되면 listen:
window.addEventListener('load', router);
