import deleteImgButton from '../../views/components/imgButton/delete/deleteImgButton';
import api from '../../apis';
import compressImage from './compressImage';

const handleImgFiles = async ({ target }) => {
  const $target = target;
  const fileList = $target.files;
  const imgContainer = document.querySelector('.write-page .img-container');
  const formData = new FormData();
  for (const file of fileList) {
    formData.append('images', await compressImage(file));
  }
  const data = await api.postImage('/upload', formData);

  for (const imageUrl of data.url) {
    const deleteImgItems = document.createElement('template');
    const src = imageUrl;
    deleteImgItems.innerHTML = await deleteImgButton.render(src);
    const deleteImgBtn = deleteImgItems.content.firstElementChild;
    imgContainer.insertAdjacentElement('beforeend', deleteImgBtn);
    await deleteImgButton.afterRender(deleteImgBtn);
  }
  $target.value = '';
};

export default handleImgFiles;
