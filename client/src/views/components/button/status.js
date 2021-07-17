import './status.css';
import icon from '../icon';

const status = {
  render: async (text) => {
    const selectIcon = await icon.render(
      'src/images/chevron-down.svg',
      '상태',
      'status-image'
    );
    const view = `
        <Button class="button-status">
            ${text || ''}
            ${selectIcon}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default status;
