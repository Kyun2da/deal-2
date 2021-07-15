import icon from '../../components/icon/icon';
import menuHeader from '../../components/menuHeader';

const category = {
  render: async () => {
    const backIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기'
    );

    const categoryHeader = await menuHeader.render(
      '#/',
      backIcon,
      null,
      '카테고리',
      'off-white'
    );
    const view = `<div class="page category-page">${categoryHeader}</div>`;

    return view;
  },
  afterRender: async () => {},
};

export default category;
