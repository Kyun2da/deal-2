import data from '../../../../mockup/likeList.json';
import productListItem from '../../productListItem/productListItem';

const likeList = {
  render: async () => {
    let likeListComponent = ``;
    for (const item of data) {
      const { img, title, town, locTime, price, isLike, chatCount, likeCount } =
        item;
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
