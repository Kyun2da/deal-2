import styles from './imgBox.css';

const imgBox = {
  render: async (src = '', alt = '', classname = '') => {
    const view = `<div><img src=${src} alt=${alt} class="${styles['img-box']} ${styles[classname]}" /></div>`;
    return view;
  },

  afterRender: async () => {},
};

export default imgBox;
