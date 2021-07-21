const toggleDisableChildrenButton = (classname) => {
  const $tabBarButtons = document.querySelector(classname).children;
  Array.from($tabBarButtons).forEach((item) => {
    const button = item;
    button.disabled = !button.disabled;
  });
};

export default toggleDisableChildrenButton;
