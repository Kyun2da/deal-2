import './large.css';

const large = {
  render: async () => {
    const placeHolder = '아이디를 입력하세요.';
    const view = `
      <input placeholder="${placeHolder}" class="large-input" />
    `;

    return view;
  },

  afterRender: async () => {},
};

export default large;
