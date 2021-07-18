const fitScroll = ({ target }) => {
  const $el = target;
  const height = '20';
  $el.style.height = `${height}px`;
  $el.style.height = `${$el.scrollHeight}px`;
  const $formContainer = document.querySelector('.write-page .form-container');
  $formContainer.scrollTop = $formContainer.scrollHeight;
};

export default fitScroll;
