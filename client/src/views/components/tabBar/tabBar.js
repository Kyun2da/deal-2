import { tab } from '../button';
import './tabBar.css';

const tabBar = {
  render: async (tabTextArr, initialActiveNum) => {
    let tabButtonItems = ``;

    // eslint-disable-next-line no-restricted-syntax
    for (const [idx, text] of tabTextArr.entries()) {
      // eslint-disable-next-line no-await-in-loop
      tabButtonItems += await tab.render(text, initialActiveNum === idx);
    }
    const view = `<div class="tab-bar">${tabButtonItems}</div>`;

    return view;
  },
  afterRender: async () => {},
};

export default tabBar;
