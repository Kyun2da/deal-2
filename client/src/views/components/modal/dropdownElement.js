import './dropdownElement.css';

const dropdownElement = {
  render: async (text) => {
    const view = `
        <Button class="main-dropdown-element">
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default dropdownElement;
