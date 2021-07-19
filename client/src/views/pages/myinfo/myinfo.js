import icon from '../../components/icon';
import menuHeader from '../../components/menuHeader';
import { button } from '../../components/button';
import './myinfo.css';

const myinfo = {
  render: async () => {
    const backIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기'
    );
    const menuHeaderItem = await menuHeader.render(
      '#/',
      backIcon,
      null,
      '내 계정',
      'off-white'
    );
    const logoutButton = await button.render('button-large', '로그아웃');
    const view = `<div class="page myinfo">
                    ${menuHeaderItem}
                    <div class="myinfo-area">
                      <p class="label">
                        Username
                      </p>
                      ${logoutButton}                
                    </div>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    // id 받아와서 label에 넣기
  },
};

export default myinfo;
