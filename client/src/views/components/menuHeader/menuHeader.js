import styles from './menuHeader.css';

const menuHeader = {
  render: async (link, frontIcon, backIcon, title = '', color = 'white') => {
    const backIconItem = backIcon
      ? `<button class="${styles['back-icon']}">${backIcon}</button>`
      : `<div class="${styles['empty-container']}"></div>`;

    const view = `
                <header class="${styles['menu-header']} ${styles[color]}" >
                  <a href="${link}" class="${styles['front-icon']}" >
                    ${frontIcon}
                  </a>
                  <div class="${styles.title}">
                    ${title}
                  </div>
                  ${backIconItem}
                </header>
            `;
    return view;
  },
  afterRender: async () => {},
};

export default menuHeader;
