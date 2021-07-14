import mainHeader from '../../components/mainHeader';
import './main.css';

const main = {
  render: async () => {
    const header = await mainHeader.render();

    const view = `<div class="main-page">${header}<div>메인 페이지</div></div>`;

    return view;
  },
  afterRender: async () => {
    mainHeader.afterRender();
  },
};

export default main;
