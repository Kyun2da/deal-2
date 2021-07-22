import icon from '../../components/icon';
import menuHeader from '../../components/menuHeader';
import './town.css';
import getTowns from '../../../services/town/getTowns';

const town = {
  render: async () => {
    if (!localStorage.getItem('id'))
      return `<div class="page town">로그인하세요</div>`;
    const backIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기'
    );
    const menuHeaderItem = await menuHeader.render(
      '#/',
      backIcon,
      null,
      '내 동네 설정하기',
      'off-white'
    );
    const view = `<div class="page town">
                    ${menuHeaderItem}
                    <div class="town-area">
                      <div class="label">
                        지역은 최소 1개 이상
                      </div>
                      <div class="label">
                        최대 2개까지 설정 가능해요.
                      </div>
                      <div class="town-buttons">
                      </div>
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    const $townButtons = document.querySelector('.town-buttons');
    getTowns($townButtons);
  },
};

export default town;
