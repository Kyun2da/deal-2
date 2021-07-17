const changeActiveImgNav = ({ target }) => {
  if (target === document.querySelector('.img-navigation')) return;

  const selectedDot = document.querySelector('.active');
  selectedDot.classList.remove('active');
  selectedDot.classList.add('inactive');
  target.classList.add('active');
  target.classList.remove('inactive');
};

export default changeActiveImgNav;
