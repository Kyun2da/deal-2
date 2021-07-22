import commingSoonModal from '../../components/commingSoonModal';
import icon from '../../components/icon';
import menuHeader from '../../components/menuHeader';
import chatList from '../../components/menuTab/chatList';
import './chatListPage.css';

const chatListPage = {
  render: async () => {
    const backIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기'
    );
    const chatListHeader = await menuHeader.render(
      '#/',
      backIcon,
      null,
      '채팅하기',
      'off-white'
    );

    const commingSoonModalItem = await commingSoonModal.render();
    const chatListItem = await chatList.render();
    const view = `<div class="page chatlist">
                    ${chatListHeader}
                    <div class="chat-list-container">
                        ${chatListItem}
                    </div>
                    ${commingSoonModalItem}
                  </div>

    `;

    return view;
  },
  afterRender: async () => {},
};

export default chatListPage;
