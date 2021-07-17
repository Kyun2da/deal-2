import './location.css';
import icon from '../icon';

const location = {
  render: async (text = '') => {
    const addIcon = await icon.render(
      'src/images/add-green.svg',
      '추가',
      'location-image'
    );
    const removeIcon = await icon.render(
      'src/images/close-green.svg',
      '삭제',
      'location-image'
    );
    const view = `
        <Button class="button-location">
            ${text || ''}
            ${text ? removeIcon : addIcon}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default location;
