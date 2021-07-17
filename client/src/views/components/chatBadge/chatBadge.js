import './chatBadge.css';

const chatBadge = {
  render: async (count) => {
    let classname = '';
    if (count < 10) {
      classname = 'single-digit';
    } else if (count < 100) {
      classname = 'ten-digits';
    } else {
      classname = 'hundred-digits';
    }

    const view = `<div class="chat-badge ${classname}">${count}</div>`;

    return view;
  },
  after_render: async () => {},
};

export default chatBadge;
