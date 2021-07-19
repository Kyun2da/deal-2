import icon from '../icon';
import './mainHeader.css';

const mainHeader = {
  render: async (isLogined = false) => {
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

    const view = `
                <header class="main-header">
                  <a href="#/category">
                    ${categoryIcon}
                  </a>
                  <div class="map-container">
                    ${mapPinIcon}
                    <span class="town-name">역삼동</span>
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
  afterRender: async () => {},
};

export default mainHeader;
