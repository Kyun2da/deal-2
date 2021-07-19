import main from './views/pages/main';
import error404 from './views/pages/error404';
import utils from './services/utils';
import login from './views/pages/login';
import './views/styles/pages/common.css';
import category from './views/pages/category/category';
import slideAnimation from './services/slideAnimation';
import menu from './views/pages/menu';
import write from './views/pages/write';
import chatListPage from './views/pages/chatList';
import chatDetail from './views/pages/chatDetail';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': main,
  '/login': login,
  '/category': category,
  '/menu': menu,
  '/write': write,
  '/chatlist': chatListPage,
  '/chatdetail': chatDetail,
  // '/p/:id': PostShow,
  // '/register': Register,
};

const mainpage = ['/'];
const leftPages = ['/category'];
const rightPages = ['/login', '/menu'];

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
  const pageWidth = 435;
  const emptyPrevElement = `<div class="empty prev"></div>`;
  const emptyNextElement = `<div class="empty next"></div>`;
  const currentPageUrl = window.location.hash.slice(1).toLowerCase() || '/';
  if (e.type === 'hashchange') {
    const backPageUrl = e.oldURL.split('#')[1] || '/';
    // leftPages에 있는 url로 들어갈 시
    if (leftPages.includes(currentPageUrl)) {
      const newContent = await page.render();
      content.removeChild(content.firstChild);
      content.insertAdjacentHTML('afterbegin', newContent);
      setTimeout(() => {
        slideAnimation(content.firstChild, pageWidth);
      }, 100);
      // rightPages에 있는 url로 들어갈 시
    } else if (rightPages.includes(currentPageUrl)) {
      const newContent = await page.render();
      content.removeChild(content.lastChild);
      content.insertAdjacentHTML('beforeend', newContent);

      setTimeout(() => {
        slideAnimation(content.lastChild, -pageWidth);
      }, 100);
      // 메인으로 돌아갈 시
    } else if (mainpage.includes(currentPageUrl)) {
      if (leftPages.includes(backPageUrl)) {
        content.firstChild.addEventListener('transitionend', () => {
          content.removeChild(content.firstChild);
          content.insertAdjacentHTML('afterbegin', emptyPrevElement);
        });
        slideAnimation(content.firstChild, -pageWidth);
      } else if (rightPages.includes(backPageUrl)) {
        content.lastChild.addEventListener('transitionend', () => {
          content.removeChild(content.lastChild);
          content.insertAdjacentHTML('beforeend', emptyNextElement);
        });
        slideAnimation(content.lastChild, pageWidth);
      } else {
        content.innerHTML = emptyPrevElement;
        content.innerHTML += await page.render();
        content.innerHTML += emptyNextElement;
      }
    } else {
      content.innerHTML = emptyPrevElement;
      content.innerHTML += await page.render();
      content.innerHTML += emptyNextElement;
    }
  } else {
    // 돔 로드일 때는 그냥 페이지 바로 렌더링
    if (leftPages.includes(currentPageUrl)) {
      content.innerHTML += await page.render();
      slideAnimation(content.firstChild, pageWidth);
    } else content.innerHTML += emptyPrevElement;
    if (
      !leftPages.includes(currentPageUrl) &&
      !rightPages.includes(currentPageUrl)
    )
      content.innerHTML += await page.render();
    else content.innerHTML += await routes[mainpage[0]].render();
    if (rightPages.includes(currentPageUrl)) {
      content.innerHTML += await page.render();
      slideAnimation(content.lastChild, -pageWidth);
    } else content.innerHTML += emptyNextElement;
  }
  // https://hi-dot.tistory.com/8

  await page.afterRender();
};

// 해쉬값이 바뀌면 listen:
window.addEventListener('hashchange', router);

// 페이지가 로드되면 listen:
window.addEventListener('load', router);
