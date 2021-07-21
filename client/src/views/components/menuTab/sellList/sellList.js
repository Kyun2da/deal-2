import data from '../../../../mockup/sellList.json';
import productListItem from '../../productListItem/productListItem';

const sellList = {
  render: async () => {
    let sellListComponent = ``;
    for (const item of data) {
      const { img, title, town, locTime, price, isLike, chatCount, likeCount } =
        item;
      sellListComponent += await productListItem.render(
        true,
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
                      ${sellListComponent}
                    </div>
                  </div>
    `;

    return view;
  },
  afterRender: async () => {},
};

export default sellList;
