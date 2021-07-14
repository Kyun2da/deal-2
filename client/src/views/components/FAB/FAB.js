import icon from '../icon';
import './FAB.css';

const FAB = {
  render: async () => {
    const plusIcon = await icon.render(
      'src/images/add.svg',
      'FAB',
      'FAB-image'
    );
    const view = `
        <Button class="FAB-btn">
            ${plusIcon}
        </Button>
    `;
    return view;
  },

  afterRender: async () => {},
};

export default FAB;
