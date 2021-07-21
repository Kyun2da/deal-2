import changeActiveComponent from '../../../services/changeActiveComponent';
import menuSlideAnimation from '../../../services/menuSlideAnimation';
import icon from '../../components/icon';
import menuHeader from '../../components/menuHeader';
import sellList from '../../components/menuTab/sellList';
import tabBar from '../../components/tabBar/tabBar';
import './menu.css';

const menu = {
  render: async () => {
    const backIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기'
    );
    const menuHeaderItem = await menuHeader.render(
      '#/',
      backIcon,
      null,
      '메뉴',
      'off-white'
    );

    const tabBarItem = await tabBar.render(['판매목록', '채팅', '관심목록'], 0);
    const sellListPage = await sellList.render();
    const view = `<div class="page menu">
                    ${menuHeaderItem}
                    ${tabBarItem}
                    <div class="slide">
                      ${sellListPage}
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    const $tabBar = document.querySelector('.tab-bar');
    $tabBar.addEventListener('click', (e) => {
      const currentActiveNode = document.querySelector(`.tab-bar .active`);
      changeActiveComponent('.tab-bar', e);
      menuSlideAnimation(currentActiveNode, e);
    });
  },
};

export default menu;
