import * as S from './styles';

function Header() {
  return (
    <div>
      <S.Container>
        <S.Contents>
          <span>SMART ECLASS</span>
          <span>
            <button onClick={() => alert('준비중')}>로그인</button>
          </span>
        </S.Contents>
      </S.Container>
    </div>
  );
}

export default Header;
