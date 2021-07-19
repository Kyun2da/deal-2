import icon from '../../components/icon';
import imgBox from '../../components/imgBox';
import menuHeader from '../../components/menuHeader';
import productBar from '../../components/productBar/productBar';
import data from '../../../mockup/productDetail.json';
import './productDetail.css';
import { status } from '../../components/button';
import infoSaler from '../../components/infoSaler/infoSaler';

const productDetail = {
  render: async () => {
    const {
      sellerId,
      title,
      price,
      content,
      town,
      category,
      createdAt,
      viewCount,
      isSelling,
      chatting,
      like,
    } = data;
    const myId = 'good2';
    const frontIcon = await icon.render(
      'src/images/chevron-left-white.svg',
      '뒤로 가기',
      'back'
    );

    const backIcon = await icon.render(
      'src/images/more-vertical-white.svg',
      '더 보기',
      'more'
    );

    const productHeader = await menuHeader.render(
      '#/',
      frontIcon,
      backIcon,
      '',
      'invisible'
    );
    const statusText = isSelling ? '판매중' : '판매완료';
    const statusButton = await status.render(statusText);
    const img = await imgBox.render(
      'src/mockup/roller.png',
      '롤러',
      'gradient'
    );

    const infoSalerItem = await infoSaler.render(sellerId, town);
    const productBarItem = await productBar.render(
      true,
      myId === sellerId,
      price
    );
    const view = `<div class="page product-detail">
                    ${productHeader}
                    <div class="product-container">
                      <div>
                        ${img}
                      </div>
                      <div class="text-container">
                        ${myId === sellerId ? statusButton : ''}
                        <div class="title">${title}</div>
                        <div class="category-time">${category} ∙ ${createdAt}</div>
                        <div class="content">${content}</div>
                        <div class="etc-info">채팅 ${chatting}∙관심 ${like}∙조회 ${viewCount}</div>
                        ${infoSalerItem}
                      </div>
                    </div>
                    ${productBarItem}
                  </div>`;

    return view;
  },
  afterRender: async () => {},
};

export default productDetail;