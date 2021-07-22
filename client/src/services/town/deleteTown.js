import api from '../../apis';

const deleteTown = async (index) => {
  await api.put('/town', { id: localStorage.getItem('id'), index });
  window.location.reload();
};

export default deleteTown;
