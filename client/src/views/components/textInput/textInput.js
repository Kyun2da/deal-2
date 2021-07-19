import './textInput.css';

const textInput = {
  render: async (type, placeHolder = '메세지를 입력하세요.', name = '') => {
    const view = `
      <input placeholder="${placeHolder}" class="${type}" name=${name || ''}>
    `;

    return view;
  },

  afterRender: async () => {},
};

export default textInput;
