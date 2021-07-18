import icon from '../icon';
import './locationBar.css';

const locationBar = {
  render: async (location) => {
    const mapPinIcon = await icon.render(
      'src/images/map-pin-black.svg',
      '장소',
      'map-pin'
    );
    const view = `<div class="location-bar">
                    ${mapPinIcon}
                    <div>${location}</div>
                  </div>`;

    return view;
  },
  afterRender: async () => {},
};

export default locationBar;
