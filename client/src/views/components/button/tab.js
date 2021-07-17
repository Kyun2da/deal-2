import './tab.css';

const tab = {
  render: async (text, isActive) => {
    const classname = isActive ? 'active' : '';
    const view = `
        <Button class="button-tab ${classname}">
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default tab;
