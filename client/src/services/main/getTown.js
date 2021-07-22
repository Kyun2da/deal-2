import api from '../../apis';
import utils from '../common/utils';
import dropdown from '../../views/components/modal/dropdown';

const getTown = async (container) => {
  const $mapContainer = container;
  const id = localStorage.getItem('id');
  const { town1, town2 } = await api.get(
    `/town?${utils.encodeQueryData({ id })}`
  );
  const townArray = [town1];
  if (town2) townArray.push(town2);
  const mapDropDown = await dropdown.render(townArray);
  $mapContainer.innerHTML += mapDropDown;
  return town1;
};

export default getTown;
