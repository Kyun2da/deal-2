import styles from './location.css';
import icon from '../icon';

const location = {
  render: async (text = '') => {
    const addIcon = await icon.render(
      'src/images/add-green.svg',
      '추가',
      styles['location-image']
    );
    const removeIcon = await icon.render(
      'src/images/close-green.svg',
      '삭제',
      styles['location-image']
    );
    const view = `
        <Button class="${styles['button-location']}">
            ${text || ''}
            ${text ? removeIcon : addIcon}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default location;
