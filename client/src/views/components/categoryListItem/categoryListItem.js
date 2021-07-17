import imgBox from '../imgBox/imgBox';
import './categoryListItem.css';

const categoryListItem = {
  render: async ({ img, title }) => {
    const imgItem = await imgBox.render(img, title, 'small');
    const view = `<div class="category-list-item">
                    ${imgItem}
                    <div class="title">${title}</div>
                  </div>`;
    return view;
  },

  afterRender: async () => {},
};

export default categoryListItem;
