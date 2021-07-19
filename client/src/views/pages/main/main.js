import mainHeader from '../../components/mainHeader';
import productListItem from '../../components/productListItem';
import './main.css';
import { FAB } from '../../components/button';
import changeDropdownDisplay from '../../../services/changeDropdownDisplay';

const main = {
  render: async () => {
    const header = await mainHeader.render();
    const FABBtn = await FAB.render();
    const categoryItem = await productListItem.render(
      0,
      'src/mockup/image.png',
      '파랑 선풍기',
      '역삼동',
      '2시간 전',
      '24,500원',
      1,
      1,
      2
    );

    const view = `<div class="page main-page">
                    ${header}
                    <section class="product-list">
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                    </section>
                    <div class="FAB-container">
                      ${FABBtn}
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    await mainHeader.afterRender();
    const $fabBtn = document.querySelector('.FAB-btn');
    $fabBtn.addEventListener('click', () => {
      window.location.href = '#/write';
    });
    const $mainPage = document.querySelector('.main-page');
    $mainPage.addEventListener('click', changeDropdownDisplay);
  },
};

export default main;
