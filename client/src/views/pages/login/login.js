import icon from '../../components/icon';
import './login.css';

const login = {
  render: async () => {
    const categoryIcon = await icon.render(
      'src/images/category.svg',
      '카테고리',
      'category-icon'
    );
    const view = `<div class="login-page">${categoryIcon}</div>`;

    return view;
  },
  afterRender: async () => {},
};

export default login;
