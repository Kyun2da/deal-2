import icon from '../../components/icon';
import menuHeader from '../../components/menuHeader';
import textInput from '../../components/textInput';
import { button } from '../../components/button';
import './login.css';
import api from '../../../apis';

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
      '아이디를 입력하세요',
      'id'
    );
    const loginButton = await button.render('button-large', '로그인');
    const view = `<div class="page login">
                    ${menuHeaderItem}
                    <form class="login-area">
                      ${idInput}
                      ${loginButton}
                      <a href="#/signup" class="signup-button">
                        회원가입
                      </a>
                    </form>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    const loginBtn = document.querySelector('.button-large');
    const input = document.getElementsByTagName('input')[0];
    loginBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const data = await api.post('/login', { id: input.value });
      if (data.id) {
        localStorage.setItem('id', data.id);
        window.location.href = '/';
      } else {
        window.location.href = '#/login';
      }
    });
  },
};

export default login;
