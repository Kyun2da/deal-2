import data from '../../../../mockup/likeList.json';
import productListItem from '../../productListItem/productListItem';

const likeList = {
  render: async () => {
    let likeListComponent = ``;
    // eslint-disable-next-line no-restricted-syntax
    for (const item of data) {
      const { img, title, town, locTime, price, isLike, chatCount, likeCount } =
        item;
      // eslint-disable-next-line no-await-in-loop
      likeListComponent += await productListItem.render(
        false,
        img,
        title,
        town,
        locTime,
        price,
        isLike,
        chatCount,
        likeCount
      );
    }
    const view = `<div class="page">
                    <div>
                      ${likeListComponent}
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {},
};

export default likeList;
