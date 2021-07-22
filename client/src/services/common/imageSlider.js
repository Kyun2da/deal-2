const slide = (container) => {
  let posX1 = 0;
  let posX2 = 0;
  let posInitial;
  let posFinal;

  const threshold = 100;
  const items = container;
  const slides = items.getElementsByClassName('slide');
  const slidesLength = slides.length;
  const slideSize = items.getElementsByClassName('slide')[0].offsetWidth;
  const firstSlide = slides[0];
  const lastSlide = slides[slidesLength - 1];
  const cloneFirst = firstSlide.cloneNode(true);
  const cloneLast = lastSlide.cloneNode(true);

  const imgNavigation = document.querySelector('.img-navigation').children;

  let index = 0;
  let allowShift = true;

  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  function dragAction(e) {
    if (e.type === 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = `${items.offsetLeft - posX2}px`;
  }

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir === 1) {
        items.style.left = `${posInitial - slideSize}px`;
        index += 1;
      } else if (dir === -1) {
        items.style.left = `${posInitial + slideSize}px`;
        index -= 1;
      }
    }
    allowShift = false;
  }

  function dragEnd() {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = `${posInitial}px`;
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function dragStart(e) {
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type === 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function checkIndex() {
    items.classList.remove('shifting');

    if (index === -1) {
      items.style.left = `${-(slidesLength * slideSize)}px`;
      index = slidesLength - 1;
    }

    if (index === slidesLength) {
      items.style.left = `${-(1 * slideSize)}px`;
      index = 0;
    }

    Array.from(imgNavigation).forEach((nav, i) => {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
      if (i === index) {
        nav.classList.add('active');
      }
    });
    allowShift = true;
  }

  items.onmousedown = dragStart;
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  items.addEventListener('transitionend', checkIndex);
};

export default slide;
