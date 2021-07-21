import data from '../../../../mockup/chatList.json';
import chatListItem from '../../chatListItem/chatListItem';

const chatList = {
  render: async () => {
    let chatListComponent = ``;
    for (const item of data) {
      const { username, message, timestamp, count, img } = item;
      chatListComponent += await chatListItem.render(
        username,
        message,
        timestamp,
        count,
        img
      );
    }

    const view = `<div class="page">
                    ${chatListComponent}     
                  </div>`;

    return view;
  },
  afterRender: async () => {},
};

export default chatList;
