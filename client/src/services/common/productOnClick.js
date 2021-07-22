const productOnClick = (container) => {
  container.addEventListener('click', () => {
    const idx = container.getAttribute('name');
    window.location.href = `#/productdetail/${idx}`;
  });
};

export default productOnClick;
