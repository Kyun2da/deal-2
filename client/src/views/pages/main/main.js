import mainHeader from '../../components/mainHeader';
import './main.css';
import { FAB } from '../../components/button';
import changeDropdownDisplay from '../../../services/main/changeDropdownDisplay';
import getProduct from '../../../services/main/getProduct';
import utils from '../../../services/common/utils';

const main = {
  render: async () => {
    const header = await mainHeader.render();
    const FABBtn = await FAB.render();
    const id = localStorage.getItem('id');
    const view = `<div class="page main-page">
                    ${header}
                    <section class="product-list">
                    </section>
                    <div class="FAB-container">
                      ${id ? FABBtn : ''}
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    await mainHeader.afterRender();
    const $fabBtn = document.querySelector('.FAB-btn');
    if ($fabBtn) {
      $fabBtn.addEventListener('click', () => {
        window.location.href = '#/write';
      });
    }

    const $mainPage = document.querySelector('.main-page');
    $mainPage.addEventListener('click', changeDropdownDisplay);
    const $productContainer = document.querySelector('.product-list');
    const town = localStorage.getItem('town');
    const { category } = utils.parseQuery();
    if (town && category)
      window.location.href = `#?town=${town}&category=${category}`;
    else if (town) window.location.href = `#?town=${town}`;
    getProduct($productContainer);
  },
};

export default main;
