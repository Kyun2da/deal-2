import icon from '../../components/icon/icon';
import menuHeader from '../../components/menuHeader';
import categoryListItem from '../../components/categoryListItem';
import styles from './category.css';

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
    const categoryData = [
      { img: 'src/mockup/image.png', title: '디지털기기' },
      { img: 'src/mockup/image.png', title: '생활가전' },
      { img: 'src/mockup/image.png', title: '가구/인테리어' },
      { img: 'src/mockup/image.png', title: '게임/취미' },
      { img: 'src/mockup/image.png', title: '생활/가공식품' },
      { img: 'src/mockup/image.png', title: '스포츠/레저' },
      { img: 'src/mockup/image.png', title: '여성패션/잡화' },
      { img: 'src/mockup/image.png', title: '남성패션/잡화' },
      { img: 'src/mockup/image.png', title: '유아동' },
      { img: 'src/mockup/image.png', title: '뷰티/미용' },
      { img: 'src/mockup/image.png', title: '반려동물' },
      { img: 'src/mockup/image.png', title: '도서/티켓/음반' },
    ];

    let categoryItems = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const item of categoryData) {
      // eslint-disable-next-line no-await-in-loop
      categoryItems += await categoryListItem.render(item);
    }
    const view = `<div class="page category-page">${categoryHeader}<div class="${styles['category-container']}">${categoryItems}</div></div>`;

    return view;
  },
  afterRender: async () => {},
};

export default category;
