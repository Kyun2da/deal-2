import api from '../../../../apis';
import productOnClick from '../../../../services/common/productOnClick';
import utils from '../../../../services/common/utils';
import productListItem from '../../productListItem/productListItem';

const sellList = {
  render: async () => {
    let sellListComponent = ``;
    const id = localStorage.getItem('id');
    if (id) {
      const { result } = await api.get(`/selllist/${id}`);
      for (const item of result) {
        const {
          idx,
          sellerId,
          image,
          title,
          town,
          createdAt,
          price,
          likeNum,
          chatNum,
        } = item;

        sellListComponent += await productListItem.render(
          idx,
          id === sellerId,
          image,
          title,
          town,
          utils.calcDate(createdAt),
          price,
          false,
          chatNum,
          likeNum
        );
      }
    } else {
      sellListComponent += '로그인이 필요합니다!';
    }

    const view = `<div class="page">
                    <div class="product-list">
                      ${sellListComponent}
                    </div>
                  </div>
    `;

    return view;
  },
  afterRender: async () => {
    const productContainer = document.querySelector('.menu .product-list');
    const { children } = productContainer;
    Array.from(children).forEach((item) => {
      productOnClick(item);
    });
  },
};

export default sellList;
