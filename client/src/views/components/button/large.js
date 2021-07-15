import styles from './large.css';

const large = {
  render: async (text) => {
    const view = `
        <Button class="${styles['button-large']}">
            ${text || ''}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default large;
