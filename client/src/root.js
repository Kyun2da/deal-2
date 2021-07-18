import main from './views/pages/main';
import error404 from './views/pages/error404';
import utils from './services/utils';
import login from './views/pages/login';
import './views/styles/pages/common.css';
import category from './views/pages/category/category';
import slideAnimation from './services/slideAnimation';
import replaceBothSideNodes from './services/replaceBothSideNodes';
import menu from './views/pages/menu';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': main,
  '/login': login,
  '/category': category,
  '/menu': menu,
  // '/p/:id': PostShow,
  // '/register': Register,
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async (e) => {
  // Lazy load view element:
  const content = null || document.getElementById('slide');

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

  if (e.type === 'hashchange') {
    const backPageUrl = e.oldURL.split('#')[1] || '/';
    const currentPageUrl = window.location.hash.slice(1).toLowerCase() || '/';
    if (backPageUrl === '/') {
      const newContent = await page.render();
      content.removeChild(content.childNodes[0]);
      content.insertAdjacentHTML('afterbegin', newContent);

      slideAnimation(content, 0);

      setTimeout(() => {
        replaceBothSideNodes(content);
      }, 500);
    } else if (currentPageUrl === '/') {
      const newContent = await page.render();
      content.removeChild(content.childNodes[content.childNodes.length - 1]);
      content.insertAdjacentHTML('beforeend', newContent);

      slideAnimation(content, -870);

      setTimeout(() => {
        replaceBothSideNodes(content);
      }, 500);
    }
  } else {
    // 돔 로드일 때는 그냥 페이지 바로 렌더링
    content.innerHTML += `<div class="empty prev"></div>`;
    content.innerHTML += await page.render();
    content.innerHTML += `<div class="empty next"></div>`;
  }
  // https://hi-dot.tistory.com/8

  await page.afterRender();
};

// 해쉬값이 바뀌면 listen:
window.addEventListener('hashchange', router);

// 페이지가 로드되면 listen:
window.addEventListener('load', router);
