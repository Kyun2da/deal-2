import data from '../../../../mockup/chatList.json';
import chatListItem from '../../chatListItem/chatListItem';

const chatList = {
  render: async () => {
    let chatListComponent = ``;

    // eslint-disable-next-line no-restricted-syntax
    for (const item of data) {
      const { username, message, timestamp, count, img } = item;
      // eslint-disable-next-line no-await-in-loop
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
