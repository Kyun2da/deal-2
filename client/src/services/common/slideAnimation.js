const slideAnimation = (node, pos) => {
  const el = node;
  const moveSpeed = 0.4;

  el.style.transition = `transform ${moveSpeed}s ease-in-out`;
  el.style.transform = `translateX(${pos}px)`;
};

export default slideAnimation;
