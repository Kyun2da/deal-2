import icon from '../icon';
import imgBox from '../imgBox/imgBox';
import styles from './productListItem.css';

const productListItem = {
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
      styles.icon
    );
    const emptyHeartIcon = await icon.render(
      'src/images/empty-heart.svg',
      '좋아요',
      styles.icon
    );

    const chatIcon = await icon.render(
      'src/images/message-square.svg',
      '채팅 아이콘',
      styles.icon
    );

    let topRightIcon;
    if (isSellerItem) {
      const kebabIcon = await icon.render(
        'src/images/more-vertical.svg',
        '더보기 아이콘',
        styles.icon
      );
      topRightIcon = kebabIcon;
    } else if (isLike) {
      topRightIcon = heartIcon;
    } else {
      topRightIcon = emptyHeartIcon;
    }

    const imgBoxItem = await imgBox.render(img, '이미지', 'large');

    const view = `<article class="${styles['item-container']}">
                    ${imgBoxItem}
                    <div class="${styles['content-container']}">
                        <div class="${styles['content-top']}">
                            <div>
                                <div class="${styles.title}">${title}</div>
                                <div class="${styles['loc-time']}">${town} ∙ ${locTime}</div>
                                <div class="${styles.price}">${price}</div>
                            </div>
                            <div>
                                ${topRightIcon}
                            </div>
                        </div>
                        <div class="${styles['content-down']}">
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

export default productListItem;
