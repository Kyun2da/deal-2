import data from '../../../../mockup/chatList.json';
import chatListItem from '../../chatListItem/chatListItem';
import commingSoonModal from '../../commingSoonModal';

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

    const commingSoonModalItem = await commingSoonModal.render();

    const view = `<div class="page">
                    ${chatListComponent}
                    ${commingSoonModalItem}
                  </div>`;

    return view;
  },
  afterRender: async () => {},
};

export default chatList;
