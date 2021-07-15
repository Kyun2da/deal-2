import styles from './icon.css';

const icon = {
  render: async (src = '', alt = '', classname = '') => {
    const view = `<img src=${src} alt=${alt} class="${styles.icon} ${classname}" />`;
    return view;
  },

  afterRender: async () => {},
};

export default icon;
