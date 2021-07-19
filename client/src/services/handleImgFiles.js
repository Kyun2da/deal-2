import deleteImgButton from '../views/components/imgButton/delete/deleteImgButton';

const handleImgFiles = async ({ target }) => {
  const $target = target;
  const fileList = $target.files;

  const imgContainer = document.querySelector('.write-page .img-container');
  // eslint-disable-next-line no-restricted-syntax
  for (const file of fileList) {
    const deleteImgItems = document.createElement('template');
    const src = window.URL.createObjectURL(file);

    // eslint-disable-next-line no-await-in-loop
    deleteImgItems.innerHTML = await deleteImgButton.render(src);

    const deleteImgBtn = deleteImgItems.content.firstElementChild;
    imgContainer.insertAdjacentElement('beforeend', deleteImgBtn);

    // eslint-disable-next-line no-await-in-loop
    await deleteImgButton.afterRender(deleteImgBtn);
  }

  $target.value = '';
};

export default handleImgFiles;
