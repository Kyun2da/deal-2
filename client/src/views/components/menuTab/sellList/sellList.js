import api from '../../../../apis';
import productOnClick from '../../../../services/common/productOnClick';
import utils from '../../../../services/common/utils';
import productDropdown from '../../modal/productDropdown';
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

    const productDropdownItem = await productDropdown.render();

    const view = `<div class="page">
                    <div class="product-list">
                      ${sellListComponent}
                      ${productDropdownItem}
                    </div>
                  </div>
    `;

    return view;
  },
  afterRender: async () => {
    const productContainer = document.querySelector('.menu .product-list');
    const { children } = productContainer;
    const productDropdownItem = document.querySelector('.product-dropdown');

    Array.from(children).forEach((item) => {
      if (item.classList.contains('item-container')) {
        productOnClick(item);
        const icon = item.querySelector('.right-icon');
        icon.addEventListener('click', (e) => {
          e.stopPropagation();
          productDropdownItem.classList.toggle('active');
          productDropdownItem.style.top = `${e.clientY - 450}px`;
        });
      }
    });

    const menuPage = document.querySelector('.page.menu');
    menuPage.addEventListener('click', () => {
      if (productDropdownItem.classList.contains('active')) {
        productDropdownItem.classList.remove('active');
      }
    });
  },
};

export default sellList;
