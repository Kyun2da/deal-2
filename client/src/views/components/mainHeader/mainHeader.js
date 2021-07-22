import icon from '../icon';
import './mainHeader.css';
import dropdown from '../modal/dropdown';
import getTown from '../../../services/main/getTown';

const townName = {
  render: async (name) => {
    const view = `<span class="town-name">${name || '전체'}</span>`;
    return view;
  },
  afterRender: async (name) => {
    const $townName = document.querySelector('.town-name');
    $townName.innerHTML = name;
  },
};

const mainHeader = {
  render: async () => {
    let isLogined = false;
    if (localStorage.getItem('id')) isLogined = true;
    const categoryIcon = await icon.render(
      'src/images/category.svg',
      '카테고리',
      'category-icon'
    );
    const mapPinIcon = await icon.render(
      'src/images/map-pin.svg',
      '맵 핀',
      'map-pin-icon'
    );
    const userIcon = await icon.render(
      'src/images/user.svg',
      '유저 정보',
      'user-icon'
    );
    const menuIcon = await icon.render(
      'src/images/menu.svg',
      '메뉴',
      'menu-icon'
    );
    const town = await townName.render();
    const view = `
                <header class="main-header">
                  <a href="#/category">
                    ${categoryIcon}
                  </a>
                  <div class="map-container">
                    ${mapPinIcon}
                    ${town}
                  </div>
                  <div class="right-icons">
                    <a href="#${isLogined ? '/myinfo' : '/login'}">
                      ${userIcon}
                    </a>
                    <a href="#/menu">
                      ${menuIcon}
                    </a>
                  </div>
                </header>
            `;
    return view;
  },
  afterRender: async () => {
    const $mapContainer = document.querySelector('.map-container');
    if (localStorage.getItem('id')) {
      await getTown($mapContainer);
      await dropdown.afterRender();
      const town = localStorage.getItem('town');
      await townName.afterRender(town);
    }
  },
};

export default mainHeader;
