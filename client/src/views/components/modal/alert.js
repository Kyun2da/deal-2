import './alert.css';

const alert = {
  render: async () => {
    const alertMessage = '정말 이 채팅방을 나가시겠습니까?';
    const cancelMessage = '취소';
    const confirmMessage = '나가기';
    const view = `
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
    `;

    return view;
  },

  afterRender: async () => {},
};

export default alert;
