import icon from '../../views/components/icon';

const toggleHeartIcon = async (e) => {
  const { target } = e;
  e.stopPropagation();
  const parentEl = target.parentNode;
  if (target.classList.contains('empty-heart-icon')) {
    const heartBtnTemplate = document.createElement('template');
    heartBtnTemplate.innerHTML = await icon.render(
      'src/images/heart.svg',
      '좋아요',
      'heart-icon'
    );
    const heartBtn = heartBtnTemplate.content.firstElementChild;
    heartBtn.addEventListener('click', toggleHeartIcon);
    parentEl.replaceChild(heartBtn, target);
  } else {
    const emptyHeartBtnTemplate = document.createElement('template');
    emptyHeartBtnTemplate.innerHTML = await icon.render(
      'src/images/empty-heart.svg',
      '빈하트',
      'empty-heart-icon'
    );
    const emptyHeartBtn = emptyHeartBtnTemplate.content.firstElementChild;
    emptyHeartBtn.addEventListener('click', toggleHeartIcon);
    parentEl.replaceChild(emptyHeartBtn, target);
  }
};

export default toggleHeartIcon;
