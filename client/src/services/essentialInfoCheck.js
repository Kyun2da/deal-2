import icon from '../views/components/icon';

const categoryFilled = (element) => {
  const categoryItems = element.children;
  return Array.from(categoryItems).some((item) =>
    item.classList.contains('active')
  );
};

const textAreaFilled = (element) => {
  if (element.value !== '') return true;
  return false;
};

const isActiveCheckBtn = async () => {
  const titleTextArea = document.querySelector('.textarea.title');
  const contentTextArea = document.querySelector('.textarea.content');
  const categoryContainer = document.querySelector(
    '.write-page .category-container'
  );
  if (
    categoryFilled(categoryContainer) &&
    textAreaFilled(titleTextArea) &&
    textAreaFilled(contentTextArea)
  ) {
    // 버튼 활성화
    const disableBtn = document.querySelector('.icon.disable');
    if (disableBtn) {
      const completeBtnTemplate = document.createElement('template');
      completeBtnTemplate.innerHTML = await icon.render(
        'src/images/check-mint.svg',
        '완료',
        'complete'
      );
      const completeBtn = completeBtnTemplate.content.firstElementChild;
      completeBtn.addEventListener('click', () => {
        window.location.href = '#/';
        // TODO: 서버에 데이터 삽입 포스트 로직 추가
      });
      disableBtn.parentNode.replaceChild(completeBtn, disableBtn);
    }
  } else {
    // 버튼 비활성화
    const completeBtn = document.querySelector('.icon.complete');
    if (completeBtn) {
      const disableBtnTemplate = document.createElement('template');
      disableBtnTemplate.innerHTML = await icon.render(
        'src/images/check.svg',
        '완료',
        'disable'
      );
      const disableBtn = disableBtnTemplate.content.firstElementChild;
      completeBtn.parentNode.replaceChild(disableBtn, completeBtn);
    }
  }
};

const essentialInfoCheck = () => {
  const titleTextArea = document.querySelector('.textarea.title');
  const contentTextArea = document.querySelector('.textarea.content');
  const categoryContainer = document.querySelector(
    '.write-page .category-container'
  );

  titleTextArea.addEventListener('input', isActiveCheckBtn);
  contentTextArea.addEventListener('input', isActiveCheckBtn);
  categoryContainer.addEventListener('click', isActiveCheckBtn);
};

export default essentialInfoCheck;
