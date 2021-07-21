const changeActiveComponent = (classname, { target }) => {
  if (target === document.querySelector(classname)) return;

  const selectedComponent = document.querySelector(`${classname} .active`);
  selectedComponent.classList.remove('active');
  target.classList.add('active');
};

export default changeActiveComponent;
