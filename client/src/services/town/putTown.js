import api from '../../apis';

const putTown = async (input) => {
  await api.put('/town', { id: localStorage.getItem('id'), town2: input });
  window.location.reload();
};

export default putTown;
