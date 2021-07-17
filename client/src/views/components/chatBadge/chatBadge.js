import './chatBadge.css';

const chatBadge = {
  render: async (count) => {
    const view = `<div class="chat-badge count">${count}</div>`;

    return view;
  },
  after_render: async () => {},
};

export default chatBadge;
