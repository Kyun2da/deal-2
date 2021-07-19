import './inputPopup.css';
import textInput from '../textInput';
import changeConfirmButton from '../../../services/changeConfirmButton';

const inputPopup = {
  render: async () => {
    const popupMessage = '현재 위치를 입력하세요.';
    const cancelMessage = '취소';
    const confirmMessage = '확인';
    const inputTown = await textInput.render(
      'medium-input',
      '시·구 제외, 동만 입력'
    );
    const view = `
        <div class="input-popup">
          <p class="popup-message">
            ${popupMessage}
          </p>
          ${inputTown}
          <div class="popup-buttons">
            <Button class="cancel-button">
              ${cancelMessage}
            </Button>
            <Button class="confirm-button">
              ${confirmMessage}
            </Button>
          </div>
        </div>
    `;

    return view;
  },

  afterRender: async () => {
    const className = '.input-popup';
    const $popup = document.querySelector(className);
    $popup.addEventListener('input', (e) => changeConfirmButton(className, e));
  },
};

export default inputPopup;
