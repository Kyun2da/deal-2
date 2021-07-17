import './imgNav.css';

const imgNav = {
  render: async (isActive = false, idx) => {
    const classname = isActive ? 'active' : 'inactive';
    const view = `
    <button class="img-nav ${classname}" name="${idx}"></button>
    `;
    return view;
  },

  afterRender: async () => {},
};

export default imgNav;
