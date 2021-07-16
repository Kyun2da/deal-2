import imgBox from '../imgBox/imgBox';
import styles from './categoryListItem.css';

const categoryListItem = {
  render: async ({ img, title }) => {
    const imgItem = await imgBox.render(img, title, 'small');
    const view = `<div class="${styles.container}">
                    ${imgItem}
                    <div class="${styles.title}">${title}</div>
                  </div>`;
    return view;
  },

  afterRender: async () => {},
};

export default categoryListItem;
