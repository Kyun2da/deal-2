import styles from './category.css';

const category = {
  render: async (text) => {
    const view = `
        <Button class="${styles['button-category']}">
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default category;
