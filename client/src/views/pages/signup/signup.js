import icon from '../../components/icon';
import menuHeader from '../../components/menuHeader';
import textInput from '../../components/textInput';
import { button } from '../../components/button';
import './signup.css';
import checkSignup from '../../../services/signup/checkSignup';

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
      '회원가입',
      'off-white'
    );
    const idInput = await textInput.render(
      'large-input',
      '영문, 숫자만 사용 5자 이상 20자 이하',
      'id'
    );
    const townInput = await textInput.render(
      'large-input',
      '시·구 제외, 동만 입력 ex) 역삼동',
      'town1'
    );
    const signupButton = await button.render('button-large', '회원가입', true);
    const view = `<div class="page signup">
                    ${menuHeaderItem}
                    <form class="signup-area" method="post" action="${domain}/signup">
                      <p class='label'>
                        아이디
                      </p>
                      ${idInput}
                      <p class='label'>
                        우리 동네
                      </p>
                      ${townInput}
                      ${signupButton}
                    </form>
                  </div>`;

    return view;
  },
  afterRender: async () => {
    const $signupArea = document.querySelector('.signup-area');
    $signupArea.addEventListener('input', () => checkSignup($signupArea));
  },
};

export default login;
