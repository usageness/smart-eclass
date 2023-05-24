import useAuth from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const { isLogin, resetAuth } = useAuth();

  return (
    <div>
      <S.Container>
        <S.Contents>
          <Link to="/">SMART ECLASS</Link>
          {isLogin ? (
            <S.HeaderContainer>
              <Link to="/study">내 강의</Link>
              <Link to="#" onClick={() => resetAuth()}>
                로그아웃
              </Link>
            </S.HeaderContainer>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </S.Contents>
      </S.Container>
    </div>
  );
}

export default Header;
