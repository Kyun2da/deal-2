import { tab } from '../button';
import './tabBar.css';

const tabBar = {
  render: async (tabTextArr, initialActiveNum) => {
    let tabButtonItems = ``;

    for (const [idx, text] of tabTextArr.entries()) {
      tabButtonItems += await tab.render(text, initialActiveNum === idx);
    }
    const view = `<div class="tab-bar">${tabButtonItems}</div>`;

    return view;
  },
  afterRender: async () => {},
};

export default tabBar;
