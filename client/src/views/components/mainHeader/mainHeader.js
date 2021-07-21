import icon from '../icon';
import './mainHeader.css';
import dropdown from '../modal/dropdown';

const mainHeader = {
  render: async () => {
    let isLogined = false;
    if (localStorage.getItem('id')) isLogined = !isLogined;
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
    const mapDropDown = await dropdown.render([]);

    const view = `
                <header class="main-header">
                  <a href="#/category">
                    ${categoryIcon}
                  </a>
                  <div class="map-container">
                    ${mapPinIcon}
                    <span class="town-name">전체</span>
                    ${mapDropDown}
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
    await dropdown.afterRender();
  },
};

export default mainHeader;
