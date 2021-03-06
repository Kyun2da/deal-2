import icon from '../../components/icon';
import imgBox from '../../components/imgBox';
import menuHeader from '../../components/menuHeader';
import productBar from '../../components/productBar/productBar';
import './productDetail.css';
import { status } from '../../components/button';
import infoSaler from '../../components/infoSaler/infoSaler';
import api from '../../../apis';
import utils from '../../../services/common/utils';
import slide from '../../../services/common/imageSlider';
import imgNavigation from '../../components/imgNavigation/imgNavigation';
import toggleHeartIcon from '../../../services/common/toggleHeartIcon';
import productDropdown from '../../components/modal/productDropdown';

const productDetail = {
  render: async (oldURL) => {
    const idx = window.location.hash.split('/')[2];
    const { result } = await api.get(`/product/${idx}`);
    const {
      sellerId,
      title,
      price,
      content,
      town,
      category,
      createdAt,
      viewNum,
      isSelling,
      chatNum,
      likeNum,
      image,
    } = result[0];
    const myId = localStorage.getItem('id');
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
      `#${oldURL || '/'}`,
      frontIcon,
      backIcon,
      '',
      'invisible'
    );
    const statusText = isSelling ? '판매중' : '판매완료';
    const statusButton = await status.render(statusText);
    let imgNavigationItem = '';
    let imageItems = '';
    if (image) {
      for (const item of image) {
        imageItems += await imgBox.render(item, '롤러', 'gradient');
      }
      imgNavigationItem += await imgNavigation.render(image?.length);
    } else {
      imageItems += await imgBox.render(
        'src/mockup/image.png',
        '롤러',
        'gradient'
      );
    }

    const infoSalerItem = await infoSaler.render(sellerId, town);
    const productBarItem = await productBar.render(
      true,
      myId === sellerId,
      price
    );

    const productModal = await productDropdown.render();
    const view = `<div class="page product-detail">
                    ${productHeader}
                    ${productModal}
                    <div class="product-container">
                      <div class="wrapper">
                        <div id="slides" class="slides">
                          ${imageItems}
                        </div>
                        ${imgNavigationItem}
                      </div>
                      <div class="text-container">
                        ${myId === sellerId ? statusButton : ''}
                        <div class="title">${title}</div>
                        <div class="category-time">${category} ∙ ${utils.calcDate(
      createdAt
    )}</div>
                        <div class="content">${content}</div>
                        <div class="etc-info">채팅 ${chatNum}∙관심 ${likeNum}∙조회 ${viewNum}</div>
                        ${infoSalerItem}
                      </div>
                    </div>
                    ${productBarItem}
                  </div>`;

    return view;
  },
  afterRender: async () => {
    const sliderItems = document.querySelector('.product-detail .slides');
    if (sliderItems.children.length > 1) {
      sliderItems.classList.add('shift');
      slide(sliderItems);
    }
    const heartIcon = document.querySelector('.product-bar').firstElementChild;
    heartIcon.addEventListener('click', (e) => {
      toggleHeartIcon(e);
    });

    await productBar.afterRender();
    const kebabIcon = document.querySelector('.icon.more');
    const productDropdownItem = document.querySelector('.product-dropdown');
    if (kebabIcon) {
      kebabIcon.addEventListener('click', async (e) => {
        e.stopPropagation();
        const url = window.location.href.split('/');
        const deleteIdx = url[url.length - 1];
        localStorage.setItem('deleteIdx', deleteIdx);
        productDropdownItem.classList.toggle('active');
      });
    }

    const productpage = document.querySelector('.page.product-detail');
    productpage.addEventListener('click', () => {
      if (productDropdownItem.classList.contains('active')) {
        productDropdownItem.classList.remove('active');
      }
    });

    await productDropdown.afterRender();
  },
};

export default productDetail;
