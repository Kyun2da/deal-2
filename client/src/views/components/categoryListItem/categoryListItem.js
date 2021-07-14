import icon from '../icon';
import './categoryListItem.css';

const categoryListItem = {
  render: async (
    isSellerItem,
    img,
    title,
    town,
    locTime,
    price,
    isLike,
    chatCount,
    likeCount
  ) => {
    const heartIcon = await icon.render(
      'src/images/heart.svg',
      '좋아요',
      'heart-icon'
    );
    const emptyHeartIcon = await icon.render(
      'src/images/empty-heart.svg',
      '좋아요',
      'empty-heart-icon'
    );

    const chatIcon = await icon.render(
      'src/images/message-square.svg',
      '채팅 아이콘',
      'chat-icon'
    );

    let topRightIcon;
    if (isSellerItem) {
      const kebabIcon = await icon.render(
        'src/images/more-vertical.svg',
        '더보기 아이콘',
        'kebab-icon'
      );
      topRightIcon = kebabIcon;
    } else if (isLike) {
      topRightIcon = heartIcon;
    } else {
      topRightIcon = emptyHeartIcon;
    }

    const view = `<article class="item-container">
                    <div class="image-container">
                        <img src=${img} alt="이미지" class="product-image"/>
                    </div>
                    <div class="content-container">
                        <div class="content-top">
                            <div>
                                <div class="title">${title}</div>
                                <div class="loc-time">${town} ∙ ${locTime}</div>
                                <div class="price">${price}</div>
                            </div>
                            <div>
                                ${topRightIcon}
                            </div>
                        </div>
                        <div class="content-down">
                            <div>
                              ${chatIcon} ${chatCount}
                            </div>
                            <div>
                              ${emptyHeartIcon} ${likeCount}
                            </div>
                        </div>
                    </div>
                  </article>`;
    return view;
  },

  afterRender: async () => {},
};

export default categoryListItem;
