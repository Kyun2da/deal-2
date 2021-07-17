import './medium.css';

const medium = {
  render: async (text) => {
    const view = `
        <Button class="button-medium">
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default medium;
