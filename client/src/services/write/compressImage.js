const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  const bb = new Blob([ab], { type: mimeString });
  return bb;
};

const resizeImage = async (image) => {
  const canvas = document.createElement('canvas');
  const { width, height } = image;

  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL('image/jpeg', 0.5);
};

const compressImage = (file) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = ({ target }) => {
      const blob = new Blob([target.result]);
      window.URL = window.URL || window.webkitURL;
      const blobURL = window.URL.createObjectURL(blob);

      const image = new Image();
      image.src = blobURL;
      image.onload = async () => {
        const resizedImage = await resizeImage(image);
        resolve(
          new File([dataURItoBlob(resizedImage)], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          })
        );
      };
    };
  });
};

export default compressImage;
