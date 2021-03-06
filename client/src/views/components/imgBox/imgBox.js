import './imgBox.css';

const imgBox = {
  render: async (src = '', alt = '', classname = '') => {
    const view = `<div class="slide"><img src="${src}" alt="${alt}" class="img-box ${classname}" /></div>`;
    return view;
  },

  afterRender: async () => {},
};

export default imgBox;
