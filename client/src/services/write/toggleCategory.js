const toggleCategory = (parentNode) => {
  const categoryItems = parentNode.children;
  let drag = false;

  parentNode.addEventListener('mousedown', () => {
    drag = false;
  });

  parentNode.addEventListener('mousemove', () => {
    drag = true;
  });

  Array.from(categoryItems).forEach((categoryItem) => {
    categoryItem.addEventListener('mouseup', (e) => {
      if (drag) return;

      const { target } = e;
      Array.from(categoryItems).forEach((item) => {
        const $el = item;
        if ($el === target) {
          target.classList.toggle('active');
        } else {
          $el.className = 'button-category';
        }
      });
    });
  });
};

export default toggleCategory;
