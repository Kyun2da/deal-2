import './chatListItem.css';
import chatBadge from '../chatBadge/chatBadge';
import imgBox from '../imgBox/imgBox';

const chatListItem = {
  render: async (username, message, timestamp, count, img) => {
    const imgItem = await imgBox.render(img, username, 'medium');
    const chatBadgeItem = await chatBadge.render(count);
    const view = `
                <div class="chat-list-item">
                  <div>
                    <div class="username">${username}</div>
                    <div class="message">${message}</div>  
                  </div>
                  <div class="chat-right-item">
                    <div class="time-badge-container">
                      <div class="timestamp">${timestamp}</div>
                      ${chatBadgeItem}
                    </div>
                    <div>
                      ${imgItem}
                    </div>
                  </div>
                </div>`;
    return view;
  },
  afterRender: async () => {},
};

export default chatListItem;
