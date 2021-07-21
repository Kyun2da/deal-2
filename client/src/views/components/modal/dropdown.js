import './dropdown.css';
import dropdownElement from './dropdownElement';

const dropdown = {
  render: async (children) => {
    children.push('내 동네 설정하기');
    let childNodes = '';
    for (const child of children) {
      childNodes += await dropdownElement.render(child);
    }
    const view = `
        <div class="main-dropdown">
            ${childNodes}
        </div>
    `;

    return view;
  },

  afterRender: async () => {
    const $mainDropdown = document.querySelector('.main-dropdown');
    const $dropdownElements = $mainDropdown.querySelectorAll(
      '.main-dropdown-element'
    );
    Array.from($dropdownElements)
      .pop()
      .addEventListener('click', () => {
        window.location.href = '#/settown';
      });
  },
};

export default dropdown;
