import chatList from '../../views/components/menuTab/chatList';
import likeList from '../../views/components/menuTab/likeList';
import sellList from '../../views/components/menuTab/sellList';
import getNodeIndex from '../common/getNodeIndex';
import slideAnimation from '../common/slideAnimation';
import toggleDisableChildrenButton from './toggleDisableChildrenButton';

const menuSlideAnimation = async (currentNode, { target }) => {
  const currentIdx = getNodeIndex(currentNode);
  const targetIdx = getNodeIndex(target);

  const $slideContainer = document.querySelector('.menu .slide');
  const currentPageNode = $slideContainer.firstElementChild;

  if (currentIdx === targetIdx) return;

  toggleDisableChildrenButton('.menu .tab-bar');

  $slideContainer.addEventListener(
    'transitionend',
    () => {
      console.log('트랜지션끝');

      $slideContainer.style.transition = 'none';
      $slideContainer.style.transform = `translateX(0px)`;
      $slideContainer.removeChild(currentPageNode);
      toggleDisableChildrenButton('.menu .tab-bar');
    },
    { once: true }
  );

  console.log(currentIdx, targetIdx);
  if (currentIdx < targetIdx) {
    console.log('오른쪽에 두었다가 왼쪽으로 겹쳐와야함');
    if (targetIdx === 1) {
      const chatListItem = await chatList.render();
      $slideContainer.insertAdjacentHTML('beforeend', chatListItem);
    } else if (targetIdx === 2) {
      const likeListItem = await likeList.render();
      $slideContainer.insertAdjacentHTML('beforeend', likeListItem);
    }
    slideAnimation($slideContainer, -435);
  } else if (currentIdx > targetIdx) {
    console.log('왼쪽에 두었다가 오른쪽으로 겹쳐와야함');
    $slideContainer.style.transform = 'translateX(-435px)';
    if (targetIdx === 0) {
      const sellListItem = await sellList.render();
      $slideContainer.insertAdjacentHTML('afterbegin', sellListItem);
    } else if (targetIdx === 1) {
      const chatListItem = await chatList.render();
      $slideContainer.insertAdjacentHTML('afterbegin', chatListItem);
    }
    setTimeout(() => {
      slideAnimation($slideContainer, 0);
    }, 0);
  }
};

export default menuSlideAnimation;
