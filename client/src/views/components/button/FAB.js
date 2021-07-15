import icon from '../icon';
import styles from './FAB.css';

const FAB = {
  render: async () => {
    const plusIcon = await icon.render(
      'src/images/add.svg',
      'FAB',
      styles['FAB-image']
    );
    const view = `
        <Button class="${styles['FAB-btn']}">
            ${plusIcon}
        </Button>
    `;
    return view;
  },

  afterRender: async () => {},
};

export default FAB;
