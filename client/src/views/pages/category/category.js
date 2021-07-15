const category = {
  render: async () => {
    const view = `<div class="page category-page">카테고리 페이지<button class="back-btn">뒤로가기</button></div>`;

    return view;
  },
  afterRender: async () => {
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', () => {
      window.history.back();
    });
  },
};

export default category;
