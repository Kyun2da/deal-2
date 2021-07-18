import './textInput.css';

const textInput = {
  render: async (type, placeHolder = '메세지를 입력하세요.') => {
    const view = `
      <input placeholder="${placeHolder}" class="${type}" />
    `;

    return view;
  },

  afterRender: async () => {},
};

export default textInput;
