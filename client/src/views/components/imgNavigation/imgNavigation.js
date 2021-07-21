import changeActiveComponent from '../../../services/changeActiveComponent';
import imgNav from '../imgNav/imgNav';
import './imgNavigation.css';

const imgNavigation = {
  render: async (count, selected = 0) => {
    let imgNavItems = '';
    for (const i of Array.from(Array(count).keys())) {
      imgNavItems += await imgNav.render(i === selected, i);
    }

    const view = `<div class="img-navigation img-navi">
        ${imgNavItems}
        </div>
    `;
    return view;
  },

  afterRender: async () => {
    const $imgNavi = document.querySelector('.img-navigation');
    $imgNavi.addEventListener('click', (e) =>
      changeActiveComponent('.img-navigation', e)
    );
  },
};

export default imgNavigation;
