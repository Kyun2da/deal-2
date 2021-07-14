import icon from '../icon';
import './index.css';

const mainHeader = {
  render: async () => {
    // const categoryIcon = await icon.render('src/images/category.svg');
    const view = /* html */ `
                <header class="main-header"></header>
            `;
    return view;
  },
  afterRender: async () => {},
};

export default mainHeader;

// 카테고리 아이콘, 맵 핀, 유저 , 메뉴
