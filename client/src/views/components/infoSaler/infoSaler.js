import './infoSaler.css';

const infoSaler = {
  render: async (username, location) => {
    const title = '판매자 정보';
    const view = `
      <div class="info-saler">
        <span class="title">
          ${title}
        </span>
        <div class="username-location">
          <span class="username">
            ${username}
          </span>
          <span class="location">
            ${location}
          </span>
        </div>
      </div> 
    `;

    return view;
  },

  afterRender: async () => {},
};

export default infoSaler;
