import { alert } from '../../views/components/modal';
import getNodeIndex from '../common/getNodeIndex';

const addAlert = async ({ target }) => {
  const modal = await alert.render('정말 삭제하시겠습니까?', '확인');
  const $townArea = target.closest('.town-area');
  $townArea.insertAdjacentHTML('beforeend', modal);
  alert.afterRender(getNodeIndex(target.closest('.button-location')) + 1);
};

export default addAlert;
