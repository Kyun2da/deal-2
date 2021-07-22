import './productBar.css';
import { button } from '../button';
import icon from '../icon';

const productBar = {
  render: async (isLike, isSeller, price) => {
    const imageSrc = isLike
      ? 'src/images/heart.svg'
      : 'src/images/empty-heart.svg';
    const imageClass = isLike ? 'heart-icon' : 'empty-heart-icon';
    const buttonMessage = isSeller ? '채팅 목록 보기' : '문의하기';
    const heartIcon = await icon.render(imageSrc, '좋아요', imageClass);
    const mediumButton = await button.render('button-medium', buttonMessage);
    const view = `
      <div class="product-bar">
        ${heartIcon}
        <span class="price">
          ${price}원
        </span>
        ${mediumButton}
      </div>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default productBar;
