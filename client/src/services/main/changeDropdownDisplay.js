const changeDropdownDisplay = ({ target }) => {
  const $mainDropdown = document.querySelector('.main-dropdown');
  if (!$mainDropdown) return;
  if (target.closest('.map-container') || target.closest('main-dropdown'))
    $mainDropdown.style.display = 'flex';
  else $mainDropdown.style.display = 'none';
};

export default changeDropdownDisplay;
