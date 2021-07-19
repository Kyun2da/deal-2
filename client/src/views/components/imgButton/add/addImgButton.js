import icon from '../../icon';
import './addImgButton.css';

const addImgButton = {
  render: async (count) => {
    const imgIcon = await icon.render(
      'src/images/image.svg',
      '이미지',
      'img-icon'
    );
    const view = `
        <label class="add-img-btn">
            <input type="file" multiple class="input-file" />
            ${imgIcon}
            <div>${count}/10</div>
        </label>
    `;

    return view;
  },
  afterRender: async () => {},
};

export default addImgButton;
