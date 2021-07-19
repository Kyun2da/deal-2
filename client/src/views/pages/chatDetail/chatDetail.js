import chatBar from '../../components/chatBar/chatBar';
import chatBubble from '../../components/chatBubble/chatBubble';
import icon from '../../components/icon';
import infoProduct from '../../components/infoProduct/infoProduct';
import menuHeader from '../../components/menuHeader/menuHeader';
import './chatDetail.css';

const chatDetail = {
  render: async () => {
    const frontIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기',
      'back'
    );

    const backIcon = await icon.render('src/images/log-out.svg', '완료', 'out');
    const chatDetailHeader = await menuHeader.render(
      '#/',
      frontIcon,
      backIcon,
      'UserE',
      'off-white'
    );

    const infoProductItem = await infoProduct.render(
      'src/mockup/image.png',
      '빈티지 롤러 스케이트',
      '160,000원',
      true
    );

    const message1 = await chatBubble.render(
      '안녕하세요! 궁금한게 있는데요',
      false
    );
    const message2 = await chatBubble.render('네 안녕하세요!', true);
    const message3 = await chatBubble.render('혹시', false);
    const message4 = await chatBubble.render(
      '실제로 신어볼 수 있는건가요??',
      false
    );
    const message5 = await chatBubble.render('넵 가능합니다', false);
    const message6 = await chatBubble.render(
      '아 그럼 어디서 만나실까요?',
      false
    );
    const message7 = await chatBubble.render('계세요?', false);

    const chatBarItem = await chatBar.render();
    const view = `
        <div class="page chat-detail">
          ${chatDetailHeader}
          ${infoProductItem}
          <div class="chat-container">
            ${message1}
            ${message2}
            ${message3}
            ${message4}
            ${message5}
            ${message6}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
            ${message7}
          </div>
          ${chatBarItem}
        </div>
    `;

    return view;
  },
  afterRender: async () => {},
};

export default chatDetail;
