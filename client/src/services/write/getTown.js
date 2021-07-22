import api from '../../apis';
import utils from '../common/utils';

const getTown = async () => {
  const id = localStorage.getItem('id');
  const { town1, town2 } = await api.get(
    `/town?${utils.encodeQueryData({ id })}`
  );
  return [town1, town2];
};

export default getTown;
