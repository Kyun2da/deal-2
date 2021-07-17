import './tab.css';

const tab = {
  render: async (text) => {
    const view = `
        <Button class="button-tap">
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default tab;
