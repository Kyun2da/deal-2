import styles from './dropdown.css';
import dropdownElement from './dropdownElement';

const dropdown = {
  render: async (children) => {
    let childNodes = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const child of children) {
      // eslint-disable-next-line no-await-in-loop
      childNodes += await dropdownElement.render(child);
    }
    const view = `
        <div class="${styles['main-dropdown']}">
            ${childNodes}
        </div>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default dropdown;
