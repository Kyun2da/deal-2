import icon from '../../components/icon';
import addImgButton from '../../components/imgButton/add/addImgButton';
import menuHeader from '../../components/menuHeader';
import './write.css';
import { category } from '../../components/button';
import fitScroll from '../../../services/fitScroll';
import locationBar from '../../components/locationBar';
import handleImgFiles from '../../../services/handleImgFiles';
import horizontalScroll from '../../../services/horizontalScroll';
import toggleCategory from '../../../services/toggleCategory';
import essentialInfoCheck from '../../../services/essentialInfoCheck';

const write = {
  render: async () => {
    const frontIcon = await icon.render(
      'src/images/chevron-left.svg',
      '뒤로 가기',
      'back'
    );

    const backIcon = await icon.render(
      'src/images/check.svg',
      '완료',
      'disable'
    );
    const writeHeader = await menuHeader.render(
      '#/',
      frontIcon,
      backIcon,
      '글쓰기',
      'off-white'
    );

    const imgButtonItem = await addImgButton.render(0);

    const categoryTitles = [
      '디지털기기',
      '생활가전',
      '가구/인테리어',
      '게임/취미',
      '생활/가공식품',
      '스포츠/레저',
      '여성패션/잡화',
      '남성패션/잡화',
      '유아동',
      '뷰티/미용',
      '반려동물',
      '도서/티켓/음반',
    ];

    let categoryItems = '';
    for (const item of categoryTitles) {
      categoryItems += await category.render(item);
    }

    const locationBarItem = await locationBar.render('역삼동');

    const view = `<div class="page write-page">
                    ${writeHeader}
                    <div class="form-container" id="form-container">
                      <div class="img-container">
                        ${imgButtonItem}
                      </div>
                      <hr/>
                      <textarea class="textarea title" name="title" placeholder="(필수)글 제목"></textarea>
                      <hr/>
                      <div class="category-label">(필수)카테고리를 선택해주세요.</div>
                      <div class="category-container">
                        ${categoryItems}
                      </div>
                      <hr/>
                      <input class="textarea price" name="price" type="number" placeholder="₩가격(선택사항)"></input>
                      <hr/>
                      <textarea class="textarea content" name="content" placeholder="(필수)게시글 내용을 작성해주세요."></textarea>
                    </div>
                    ${locationBarItem}
                  </div>`;

    return view;
  },
  afterRender: async () => {
    const textareaItems = document.querySelectorAll('.page .textarea');
    Array.from(textareaItems).forEach((item) => {
      item.addEventListener('input', fitScroll);
    });

    const addImgInput = document.querySelector('.write-page .input-file');
    addImgInput.addEventListener('change', handleImgFiles, false);

    horizontalScroll('.write-page .img-container');
    horizontalScroll('.write-page .category-container');

    toggleCategory(document.querySelector('.write-page .category-container'));

    essentialInfoCheck();
  },
};

export default write;
