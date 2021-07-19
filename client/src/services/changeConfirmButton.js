const changeConfirmButton = (className, { target }) => {
  if (target.className !== 'medium-input') return;
  const confirmButton = target
    .closest(className)
    .querySelector('.confirm-button');
  if (/동$/.test(target.value)) confirmButton.classList.add('active');
  else confirmButton.classList.remove('active');
};

export default changeConfirmButton;
