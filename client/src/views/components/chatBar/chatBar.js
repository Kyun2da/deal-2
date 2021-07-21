import './chatBar.css';
import textInput from '../textInput';
import icon from '../icon';
import changeSendIcon from '../../../services/chatDetail/changeSendIcon';

const iconData = {
  className: 'send-icon',
  alt: '보내기',
  defaultSrc: 'src/images/send.svg',
  activeSrc: 'src/images/send-green.svg',
};

const chatBar = {
  render: async () => {
    const mediumInput = await textInput.render('medium-input');
    const { defaultSrc, alt, className } = iconData;
    const sendIcon = await icon.render(defaultSrc, alt, className);
    const view = `
      <div class="chat-bar">
        ${mediumInput}
        ${sendIcon}
      </div>
    `;

    return view;
  },

  afterRender: async () => {
    const $chatBar = document.querySelector('.chat-bar');
    $chatBar.addEventListener('keyup', (e) =>
      changeSendIcon('.chat-bar', iconData, e)
    );
  },
};

export default chatBar;
