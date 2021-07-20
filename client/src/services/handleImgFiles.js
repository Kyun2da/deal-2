import deleteImgButton from '../views/components/imgButton/delete/deleteImgButton';
import api from '../apis';

const handleImgFiles = async ({ target }) => {
  const $target = target;
  const fileList = $target.files;
  const imgContainer = document.querySelector('.write-page .img-container');
  const formData = new FormData();
  // eslint-disable-next-line no-restricted-syntax
  for (const file of fileList) {
    const deleteImgItems = document.createElement('template');
    const src = window.URL.createObjectURL(file);
    formData.append('images', file);

    // eslint-disable-next-line no-await-in-loop
    deleteImgItems.innerHTML = await deleteImgButton.render(src);

    const deleteImgBtn = deleteImgItems.content.firstElementChild;
    imgContainer.insertAdjacentElement('beforeend', deleteImgBtn);

    // eslint-disable-next-line no-await-in-loop
    await deleteImgButton.afterRender(deleteImgBtn);
  }
  const data = await api.postImage('/upload', formData);
  console.log(data);
  $target.value = '';
};

export default handleImgFiles;
