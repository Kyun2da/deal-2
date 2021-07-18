import './medium.css';

const medium = {
  render: async () => {
    const placeHolder = '메세지를 입력하세요.';
    const view = `
      <input placeholder="${placeHolder}" class="medium-input" />
    `;

    return view;
  },

  afterRender: async () => {},
};

export default medium;
