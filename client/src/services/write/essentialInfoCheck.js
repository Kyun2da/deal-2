import icon from '../../views/components/icon';
import api from '../../apis';

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
      const categoryValue =
        categoryContainer.querySelector('.active').innerText;
      const priceContainer = document.querySelector('.textarea.price');
      const imgContainer = document.querySelector('.img-container');
      const uploadedImages = imgContainer.querySelectorAll('.uploaded-img');
      const imgUrlArr = Array.from(uploadedImages).map(
        (image) => image.querySelector('.img-box.medium').src
      );
      const locationBar = document.querySelector('.location-bar');
      const townValue =
        locationBar.querySelector('.town-value.active').innerText;

      completeBtn.addEventListener('click', async () => {
        const productData = {
          sellerId: localStorage.getItem('id'),
          images: imgUrlArr,
          town: townValue,
          title: titleTextArea.value,
          category: categoryValue,
          price: priceContainer.value,
          content: contentTextArea.value,
        };
        const result = await api.post('/product', productData);
        if (result.msg) {
          window.location.href = '#/';
        }
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
