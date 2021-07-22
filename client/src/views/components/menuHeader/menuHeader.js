import './menuHeader.css';

const menuHeader = {
  render: async (
    link = '#/',
    frontIcon,
    backIcon,
    title = '',
    color = 'white'
  ) => {
    const backIconItem = backIcon
      ? `<button class="back-icon">${backIcon}</button>`
      : `<div class="empty-container"></div>`;

    const view = `
                <header class="menu-header ${color}" >
                  <a href="${link}" class="front-icon" >
                    ${frontIcon}
                  </a>
                  <div class="title">
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
