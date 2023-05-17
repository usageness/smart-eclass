import { Link } from 'react-router-dom';
import * as S from './styles';

function Header() {
  return (
    <div>
      <S.Container>
        <S.Contents>
          <Link to="/">SMART ECLASS</Link>
          <Link to="/login">로그인</Link>
        </S.Contents>
      </S.Container>
    </div>
  );
}

export default Header;
