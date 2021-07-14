import icon from '../icon';

const mainHeader = {
  render: async () => {
    const categoryIcon = await icon.render('src/images/category.svg');
    const view = /* html */ `
                <section class="section">
                ${categoryIcon}
                    <h1> 메인 헤더3 </h1>
                </section>
            `;
    return view;
  },
  afterRender: async () => {},
};

export default mainHeader;
