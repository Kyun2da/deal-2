import icon from '../../components/icon';
import menuHeader from '../../components/menuHeader';
import textInput from '../../components/textInput';
import { button } from '../../components/button';
import './login.css';

const login = {
  render: async () => {
    const backIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기'
    );
    const menuHeaderItem = await menuHeader.render(
      '#/',
      backIcon,
      null,
      '로그인',
      'off-white'
    );
    const idInput = await textInput.render(
      'large-input',
      '아이디를 입력하세요'
    );
    const loginButton = await button.render('button-large', '로그인');
    const view = `<div class="page login">
                    ${menuHeaderItem}
                    <form method="post" action="http://localhost:3000/api/login"  class="login-area" >
                      ${idInput}
                      ${loginButton}
                      <a href="#/signup" class="signup-button">
                        회원가입
                      </a>
                    </form>
                  </div>`;

    return view;
  },
  afterRender: async () => {},
};

export default login;
