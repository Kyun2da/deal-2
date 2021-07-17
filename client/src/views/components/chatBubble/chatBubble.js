import './chatBubble.css';

const chatBubble = {
  render: async (content = '', isMe) => {
    const classname = isMe ? 'my-chat' : 'others-chat';
    const view = `<div class="chat-bubble ${classname}">${content}</div>`;

    return view;
  },
  after_render: async () => {},
};

export default chatBubble;
