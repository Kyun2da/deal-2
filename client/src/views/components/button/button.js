import './button.css';

const button = {
  render: async (type, text, disabled = false) => {
    const view = `
        <Button class="${type}" ${disabled ? 'disabled' : ''}>
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default button;
