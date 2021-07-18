const changeSendIcon = (
  parentClassName,
  { className: iconClassName, defaultSrc, activeSrc },
  { target }
) => {
  if (target.className !== 'medium-input') return;
  const icon = target
    .closest(parentClassName)
    .querySelector(`.${iconClassName}`);
  if (target.value.length > 0) {
    icon.src = icon.src.replace(defaultSrc, activeSrc);
  } else {
    icon.src = icon.src.replace(activeSrc, defaultSrc);
  }
};

export default changeSendIcon;
