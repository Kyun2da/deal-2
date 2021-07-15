import mainHeader from '../../components/mainHeader';
import categoryListItem from '../../components/categoryListItem';
import './main.css';
import FAB from '../../components/FAB';

const main = {
  render: async () => {
    const header = await mainHeader.render();
    const FABBtn = await FAB.render();
    const categoryItem = await categoryListItem.render(
      0,
      './mockup/image.png',
      '파랑 선풍기',
      '역삼동',
      '2시간 전',
      '24,500원',
      1,
      1,
      2
    );

    const view = `<div class="page main-page">
                    ${header}
                    <section class="product-list">
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                      ${categoryItem}
                    </section>
                    <div class="FAB-container">
                      ${FABBtn}
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    await mainHeader.afterRender();
  },
};

export default main;
