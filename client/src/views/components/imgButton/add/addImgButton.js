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
        <div class="add-img-btn">
            ${imgIcon}
            <div>${count}/10</div>
        </div>
    `;

    return view;
  },
  afterRender: async () => {},
};

export default addImgButton;
