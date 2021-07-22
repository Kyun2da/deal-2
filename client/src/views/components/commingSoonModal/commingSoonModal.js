import './commingSoonModal.css';

const commingSoonModal = {
  render: async () => {
    const view = `<div class="comming-soon-modal">
                    <div class="title">Comming Soon!</div>
                    <a href="#/" class="link">메인 페이지로 가기</a>
                  </div>`;
    return view;
  },

  afterRender: async () => {},
};

export default commingSoonModal;
