import './imgNav.css';

const imgNav = {
  render: async (isActive = false, idx) => {
    const classname = isActive ? 'active' : '';
    const view = `
    <button class="img-nav ${classname}" name="${idx}"></button>
    `;
    return view;
  },

  after_render: async () => {},
};

export default imgNav;
