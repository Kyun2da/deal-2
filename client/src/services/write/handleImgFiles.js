import deleteImgButton from '../../views/components/imgButton/delete/deleteImgButton';
import api from '../../apis';

const handleImgFiles = async ({ target }) => {
  const $target = target;
  const fileList = $target.files;
  const imgContainer = document.querySelector('.write-page .img-container');
  const formData = new FormData();

  Array.from(fileList).forEach((file) => formData.append('images', file));

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
