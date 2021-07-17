import './chatBadge.css';

const chatBadge = {
  render: async (count) => {
    if (count === 0) return '';
    const view = `<div class="chat-badge count">${count}</div>`;

    return view;
  },
  afterRender: async () => {},
};

export default chatBadge;
