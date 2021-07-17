const changeActiveImgNav = (e) => {
  e.preventDefault();
  if (e.target === document.querySelector('.img-navigation')) return;

  const selectedDot = document.querySelector('.active');
  selectedDot.classList.remove('active');
  selectedDot.classList.add('inactive');
  e.target.classList.add('active');
  e.target.classList.remove('inactive');
};

export default changeActiveImgNav;
