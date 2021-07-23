import './productDropdown.css';
import dropdownElement from './dropdownElement';
import alert from './alert';

const productDropdown = {
  render: async () => {
    const updateDropdown = await dropdownElement.render('수정하기');
    const deleteDropdown = await dropdownElement.render('삭제하기');
    const view = `
        <div class="product-dropdown">
            ${updateDropdown}
            ${deleteDropdown}
        </div>
    `;

    return view;
  },

  afterRender: async () => {
    const deleteDropdown =
      document.querySelector('.product-dropdown').lastElementChild;
    deleteDropdown.addEventListener('click', async () => {
      const modal = await alert.render('정말 삭제하시겠습니까?', '확인');
      let $townArea = document.querySelector('.page.menu');
      if (!$townArea) {
        $townArea = document.querySelector('.page');
      }
      $townArea.insertAdjacentHTML('beforeend', modal);
      await alert.afterRender();
    });
  },
};

export default productDropdown;
