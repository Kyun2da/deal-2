const replaceBothSideNodes = (node) => {
  const content = node;
  const currentPageUrl = window.location.hash.slice(1).toLowerCase() || '/';

  content.style.transition = 'none';
  content.style.transform = 'translateX(-435px)';

  if (currentPageUrl === '/') {
    content.removeChild(content.childNodes[0]);
    content.removeChild(content.childNodes[0]);
  } else {
    content.removeChild(content.childNodes[content.childNodes.length - 1]);
    content.removeChild(content.childNodes[content.childNodes.length - 1]);
  }

  content.insertAdjacentHTML('afterbegin', `<div class="empty prev"></div>`);
  content.insertAdjacentHTML('beforeend', `<div class="empty next"></div>`);
};

export default replaceBothSideNodes;
