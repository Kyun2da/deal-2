import './location.css';
import icon from '../icon';
import addInputPopup from '../../../services/town/addInputPopup';
import addAlert from '../../../services/town/addAlert';

const location = {
  render: async (text = '') => {
    const addIcon = await icon.render(
      'src/images/add-green.svg',
      '추가',
      'add'
    );
    const removeIcon = await icon.render(
      'src/images/close-green.svg',
      '삭제',
      'remove'
    );
    const view = `
        <Button class="button-location">
            ${text || ''}
            ${text ? removeIcon : addIcon}
        </Button>
    `;

    return view;
  },

  afterRender: async () => {
    const $addIcon = document.querySelector('.add.icon');
    if ($addIcon) $addIcon.addEventListener('click', addInputPopup);
    const $removeIcons = document.querySelectorAll('.remove.icon');
    if ($removeIcons.length > 1)
      $removeIcons.forEach(($removeIcon) => {
        $removeIcon.addEventListener('click', addAlert);
      });
  },
};

export default location;
