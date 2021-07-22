import deleteTown from '../../../services/town/deleteTown';
import './alert.css';

const alert = {
  render: async (alertMessage, confirmMessage) => {
    const cancelMessage = '취소';
    const view = `
    <div class="alert-area">
        <div class="alert">
            <div class="alert-message">
                ${alertMessage}
            </div>
            <div class="alert-buttons">
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

  afterRender: async (calledIndex) => {
    const $alertArea = document.querySelector('.alert-area');
    $alertArea.addEventListener('click', ({ target }) => {
      if (
        target.className === 'alert-area' ||
        target.className === 'cancel-button'
      )
        $alertArea.remove();
    });
    const $confirmButton = document.querySelector('.confirm-button');
    $confirmButton.addEventListener('click', async () => {
      deleteTown(calledIndex);
    });
  },
};

export default alert;
