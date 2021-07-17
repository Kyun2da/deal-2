import './tap.css';

const tap = {
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

export default tap;
