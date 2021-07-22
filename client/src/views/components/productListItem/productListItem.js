import icon from '../icon';
import imgBox from '../imgBox/imgBox';
import './productListItem.css';

const productListItem = {
  render: async (
    idx,
    isSellerItem,
    image,
    title,
    town,
    createdAt,
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
      '빈하트',
      'empty-heart-icon'
    );

    const emptySmallHeartIcon = await icon.render(
      'src/images/empty-heart.svg',
      '빈하트',
      'nonclick-icon'
    );

    const chatSmallIcon = await icon.render(
      'src/images/message-square.svg',
      '채팅 아이콘',
      'nonclick-icon'
    );

    let topRightIcon;
    if (isSellerItem) {
      const kebabIcon = await icon.render(
        'src/images/more-vertical.svg',
        '더보기 아이콘',
        'icon'
      );
      topRightIcon = kebabIcon;
    } else if (isLike) {
      topRightIcon = heartIcon;
    } else {
      topRightIcon = emptyHeartIcon;
    }

    const imgBoxItem = await imgBox.render(
      image || 'src/mockup/image.png',
      '이미지',
      'large'
    );

    const view = `<article class="item-container" name="${idx}">
                    ${imgBoxItem}
                    <div class="content-container">
                        <div class="content-top">
                            <div>
                                <div class="title">${title}</div>
                                <div class="loc-time">${town} ∙ ${createdAt}</div>
                                <div class="price">${price}</div>
                            </div>
                            <div class="right-icon">
                                ${topRightIcon}
                            </div>
                        </div>
                        <div class="content-down">
                            <div>
                              ${chatSmallIcon} ${chatCount}
                            </div>
                            <div>
                              ${emptySmallHeartIcon} ${likeCount}
                            </div>
                        </div>
                    </div>
                  </article>`;
    return view;
  },

  afterRender: async () => {},
};

export default productListItem;
