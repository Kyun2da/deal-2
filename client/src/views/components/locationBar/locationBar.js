import icon from '../icon';
import './locationBar.css';

const townValue = {
  render: async (value, active = '') => {
    const view = `
                  <div class="town-value ${active}">${value || ''}</div>
                  `;
    return view;
  },
  afterRender: async () => {
    const townValues = Array.from(document.querySelectorAll('.town-value'));
    townValues.forEach((value) => {
      value.addEventListener('click', ({ target }) => {
        if (!target.classList.contains('active'))
          townValues.forEach((v) => {
            v.classList.toggle('active');
          });
      });
    });
  },
};

const locationBar = {
  render: async () => {
    const mapPinIcon = await icon.render(
      'src/images/map-pin-black.svg',
      '장소',
      'map-pin'
    );
    const view = `<div class="location-bar">
                    ${mapPinIcon}
                  </div>`;

    return view;
  },
  afterRender: async (townArray) => {
    const $locationBar = document.querySelector('.location-bar');
    $locationBar.insertAdjacentHTML(
      'beforeend',
      await townValue.render(townArray[0], 'active')
    );
    $locationBar.insertAdjacentHTML(
      'beforeend',
      await townValue.render(townArray[1])
    );
    townValue.afterRender();
  },
};

export default locationBar;
