import main from './views/pages/main';
import error404 from './views/pages/error404';
import utils from './services/common/utils';
import login from './views/pages/login';
import './views/styles/pages/common.css';
import category from './views/pages/category/category';
import slideAnimation from './services/common/slideAnimation';
import menu from './views/pages/menu';
import write from './views/pages/write';
import chatListPage from './views/pages/chatList';
import signup from './views/pages/signup';
import myinfo from './views/pages/myinfo';
import chatDetail from './views/pages/chatDetail';
import productDetail from './views/pages/productDetail';
import town from './views/pages/town';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': main,
  '/login': login,
  '/category': category,
  '/menu': menu,
  '/write': write,
  '/chatlist': chatListPage,
  '/signup': signup,
  '/myinfo': myinfo,
  '/chatdetail': chatDetail,
  '/productdetail': productDetail,
  '/town': town,
  // '/p/:id': PostShow,
  // '/register': Register,
};

const mainpage = ['/'];
const leftPages = ['/category'];
const rightPages = ['/login', '/menu'];

const router = async (e) => {
  const content = null || document.getElementById('slide');

  const parsedURL = utils.parseHostURL() || '/';

  const page = routes[parsedURL] ? routes[parsedURL] : error404;
  const pageWidth = 435;
  const emptyPrevElement = `<div class="empty prev"></div>`;
  const emptyNextElement = `<div class="empty next"></div>`;
  const currentPageUrl = window.location.hash.slice(1).toLowerCase() || '/';

  if (e.type === 'hashchange') {
    const backPageUrl = e.oldURL.split('#')[1] || '/';
    // leftPages에 있는 url로 들어갈 시
    if (leftPages.includes(currentPageUrl) && mainpage.includes(backPageUrl)) {
      const newContent = await page.render();
      content.removeChild(content.firstChild);
      content.insertAdjacentHTML('afterbegin', newContent);
      setTimeout(() => {
        slideAnimation(content.firstChild, pageWidth);
      }, 100);
      // rightPages에 있는 url로 들어갈 시
    } else if (
      rightPages.includes(currentPageUrl) &&
      mainpage.includes(backPageUrl)
    ) {
      const newContent = await page.render();
      content.removeChild(content.lastChild);
      content.insertAdjacentHTML('beforeend', newContent);

      setTimeout(() => {
        slideAnimation(content.lastChild, -pageWidth);
      }, 100);
      // 메인으로 돌아갈 시
    } else if (mainpage.includes(currentPageUrl)) {
      if (leftPages.includes(backPageUrl)) {
        content.removeChild(content.lastChild);
        content.removeChild(content.lastChild);
        content.insertAdjacentHTML('beforeend', await page.render());
        content.insertAdjacentHTML('beforeend', emptyNextElement);
        content.firstChild.addEventListener('transitionend', () => {
          content.removeChild(content.firstChild);
          content.insertAdjacentHTML('afterbegin', emptyPrevElement);
        });
        slideAnimation(content.firstChild, -pageWidth);
      } else if (rightPages.includes(backPageUrl)) {
        content.removeChild(content.firstChild);
        content.removeChild(content.firstChild);
        content.insertAdjacentHTML('afterbegin', await page.render());
        content.insertAdjacentHTML('afterbegin', emptyPrevElement);
        content.lastChild.addEventListener('transitionend', () => {
          content.removeChild(content.lastChild);
          content.insertAdjacentHTML('beforeend', emptyNextElement);
        });
        slideAnimation(content.lastChild, pageWidth);
      } else {
        content.innerHTML = emptyPrevElement;
        content.insertAdjacentHTML('beforeend', await page.render());
        content.insertAdjacentHTML('beforeend', emptyNextElement);
      }
    } else {
      content.innerHTML = emptyPrevElement;
      content.insertAdjacentHTML('beforeend', await page.render(backPageUrl));
      content.insertAdjacentHTML('beforeend', emptyNextElement);
    }
  } else {
    // 돔 로드일 때는 그냥 페이지 바로 렌더링
    if (leftPages.includes(currentPageUrl)) {
      content.innerHTML = await page.render();
      slideAnimation(content.firstChild, pageWidth);
    } else content.innerHTML = emptyPrevElement;
    if (
      !leftPages.includes(currentPageUrl) &&
      !rightPages.includes(currentPageUrl)
    )
      content.insertAdjacentHTML('beforeend', await page.render());
    else
      content.insertAdjacentHTML(
        'beforeend',
        await routes[mainpage[0]].render()
      );
    if (rightPages.includes(currentPageUrl)) {
      content.insertAdjacentHTML('beforeend', await page.render());
      slideAnimation(content.lastChild, -pageWidth);
    } else content.insertAdjacentHTML('beforeend', emptyNextElement);
  }

  await page.afterRender();
};

// 해쉬값이 바뀌면 listen:
window.addEventListener('hashchange', router);

// 페이지가 로드되면 listen:
window.addEventListener('load', router);
