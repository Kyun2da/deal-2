import { inputPopup } from '../../views/components/modal';

const addInputPopup = async ({ target }) => {
  const modal = await inputPopup.render();
  const $townArea = target.closest('.town-area');
  $townArea.insertAdjacentHTML('beforeend', modal);
  inputPopup.afterRender();
};

export default addInputPopup;
