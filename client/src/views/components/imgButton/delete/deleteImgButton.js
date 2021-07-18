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
        <div class="delete-img-btn ">
            ${imgBoxItem}
            ${deleteBtn}
        </div>
    `;

    return view;
  },
  afterRender: async () => {},
};

export default deleteImgButton;
