import mainHeader from '../components/mainHeader';

const main = {
  render: async () => {
    const header = await mainHeader.render();

    const view = `${header}<div>메인 페이지</div>`;

    return view;
  },
  afterRender: async () => {
    mainHeader.afterRender();
  },
};

export default main;
