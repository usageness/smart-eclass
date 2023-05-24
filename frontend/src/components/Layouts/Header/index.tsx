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
            <>
              <Link to="#" onClick={() => resetAuth()}>
                로그아웃
              </Link>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </S.Contents>
      </S.Container>
    </div>
  );
}

export default Header;
