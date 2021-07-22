import api from '../../apis';
import productListItem from '../../views/components/productListItem';
import toggleHeartIcon from '../common/toggleHeartIcon';
import utils from '../common/utils';
import productOnClick from '../common/productOnClick';

const getProduct = async (container) => {
  const parameter = utils.parseQuery();
  const paramUrl = utils.encodeQueryData({
    category: parameter.category,
    town: parameter.town,
  });
  const questionMark = paramUrl ? '?' : '';
  const url = `/product${questionMark}${paramUrl}`;

  const products = await api.get(url);
  const productContainer = container;
  for (const product of products.result) {
    const {
      idx,
      image,
      title,
      town,
      createdAt,
      price,
      isLike,
      chatNum,
      likeNum,
    } = product;
    productContainer.innerHTML += await productListItem.render(
      idx,
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
    productOnClick(item);
    const rightIcon = item.querySelector('.icon');
    rightIcon.addEventListener('click', (e) => {
      toggleHeartIcon(e);
    });
  });
};

export default getProduct;
