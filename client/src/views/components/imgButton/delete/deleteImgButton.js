import icon from '../../icon';
import imgBox from '../../imgBox/imgBox';
import './deleteImgButton.css';

const deleteImgButton = {
  render: async (src) => {
    const imgBoxItem = await imgBox.render(src, '이미지', 'medium');
    const deleteBtn = await icon.render(
      'src/images/close.svg',
      '이미지',
      'delete-icon'
    );
    const view = `
        <div class="uploaded-img ">
            ${imgBoxItem}
            ${deleteBtn}
        </div>
    `;

    return view;
  },
  afterRender: async (target) => {
    const closeBtn = target.querySelector('.delete-icon');
    closeBtn.addEventListener('click', () => {
      target.remove();
    });
  },
};

export default deleteImgButton;
