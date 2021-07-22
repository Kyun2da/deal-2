import api from '../../apis';
import utils from '../common/utils';
import { location } from '../../views/components/button';

const getTowns = async (container) => {
  const $buttonContainer = container;
  const id = localStorage.getItem('id');
  const { town1, town2 } = await api.get(
    `/town?${utils.encodeQueryData({ id })}`
  );
  const townArray = [town1, town2];
  for (const town of townArray) {
    const locationButton = await location.render(town);
    $buttonContainer.innerHTML += locationButton;
  }
  location.afterRender();
};

export default getTowns;
