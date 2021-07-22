import './productDropdown.css';
import dropdownElement from './dropdownElement';

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

  afterRender: async () => {},
};

export default productDropdown;
