import data from '../../../../mockup/likeList.json';
import productListItem from '../../productListItem/productListItem';
import commingSoonModal from '../../commingSoonModal';

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
    const commingSoonModalItem = await commingSoonModal.render();
    const view = `<div class="page">
                    <div>
                      ${likeListComponent}
                      ${commingSoonModalItem}
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {},
};

export default likeList;
