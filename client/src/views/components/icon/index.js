const icon = {
  render: async (src = '', alt = '') => {
    const view = `<img src=${src} alt=${alt}/>`;
    return view;
  },

  afterRender: async () => {},
};

export default icon;
