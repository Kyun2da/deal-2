import api from '../../apis';
import productListItem from '../../views/components/productListItem';
import toggleHeartIcon from '../common/toggleHeartIcon';
import utils from '../common/utils';

const getProduct = async (container, categoryParams, townParams) => {
  const paramUrl = utils.encodeQueryData({
    category: categoryParams,
    town: townParams,
  });
  const url = `/product${paramUrl}`;

  const products = await api.get(url);
  const productContainer = container;
  for (const product of products.result) {
    const { image, title, town, createdAt, price, isLike, chatNum, likeNum } =
      product;
    productContainer.innerHTML += await productListItem.render(
      false,
      image,
      title,
      town,
      utils.calcDate(createdAt),
      price,
      isLike,
      chatNum,
      likeNum
    );
  }

  const { children } = productContainer;

  Array.from(children).forEach((item) => {
    const rightIcon = item.querySelector('.icon');
    rightIcon.addEventListener('click', (e) => {
      toggleHeartIcon(e);
    });
  });
};

export default getProduct;
