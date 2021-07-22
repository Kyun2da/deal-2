import './inputPopup.css';
import textInput from '../textInput';
import changeConfirmButton from '../../../services/town/changeConfirmButton';
import putTown from '../../../services/town/putTown';

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
      <div class="popup-area">
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
      </div>
    `;

    return view;
  },

  afterRender: async () => {
    const className = '.input-popup';
    const $popup = document.querySelector(className);
    $popup.addEventListener('input', (e) => changeConfirmButton(className, e));
    const $popupArea = document.querySelector('.popup-area');
    $popupArea.addEventListener('click', ({ target }) => {
      if (
        target.className === 'popup-area' ||
        target.className === 'cancel-button'
      )
        $popupArea.remove();
    });
    const $confirmButton = document.querySelector('.confirm-button');
    $confirmButton.addEventListener('click', async ({ target }) => {
      if (target.classList.contains('active')) {
        putTown($popupArea.querySelector('input').value);
      }
    });
  },
};

export default inputPopup;
