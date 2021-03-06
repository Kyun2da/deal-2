import imgBox from '../imgBox';
import './infoProduct.css';

const infoProduct = {
  render: async (src, productName, price, isSelling) => {
    const statusText = isSelling ? '판매중' : '판매완료';

    const imgItem = await imgBox.render(src, '아이템 이미지', 'small');
    const view = `<div class="info-product">
                    <div class="info-product-detail">
                        ${imgItem}
                        <div class="info-product-text">
                          <div class="product-name">${productName}</div>
                          <div class="price">${price}</div>
                        </div>
                    </div>
                    <div class="is-selling">${statusText}</div>
                  </div>
    `;

    return view;
  },
  afterRender: async () => {},
};

export default infoProduct;
