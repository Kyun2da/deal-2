import './button.css';

const button = {
  render: async (type, text) => {
    const view = `
        <Button class="${type}">
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default button;
