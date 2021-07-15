import icon from '../icon';
import styles from './mainHeader.css';

const mainHeader = {
  render: async () => {
    const categoryIcon = await icon.render(
      'src/images/category.svg',
      '카테고리',
      styles['category-icon']
    );
    const mapPinIcon = await icon.render(
      'src/images/map-pin.svg',
      '맵 핀',
      styles['map-pin-icon']
    );
    const userIcon = await icon.render(
      'src/images/user.svg',
      '유저 정보',
      styles['user-icon']
    );
    const menuIcon = await icon.render(
      'src/images/menu.svg',
      '메뉴',
      styles['menu-icon']
    );

    const view = `
                <header class="${styles['main-header']}">
                  <a href="#/category">
                    ${categoryIcon}
                  </a>
                  <div class="${styles['map-container']}">
                    ${mapPinIcon}
                    <span class="${styles['town-name']}">역삼동</span>
                  </div>
                  <div class="${styles['right-icons']}">
                    ${userIcon}
                    ${menuIcon}
                  </div>
                </header>
            `;
    return view;
  },
  afterRender: async () => {},
};

export default mainHeader;
