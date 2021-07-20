const checkSignup = (area) => {
  const idInput = document.getElementsByName('id')[0];
  const townInput = document.getElementsByName('town1')[0];
  const idRegex = /[0-9a-zA-Z]{5,20}/;
  const townRegex = /동$/;
  const button = area.getElementsByTagName('Button')[0];
  if (idRegex.test(idInput.value) && townRegex.test(townInput.value))
    button.disabled = false;
  else button.disabled = true;
};

export default checkSignup;
