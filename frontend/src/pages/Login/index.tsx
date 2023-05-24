import { Link, useNavigate } from 'react-router-dom';
import { requestLogin } from 'apis/request/auth';
import useAuth from 'hooks/useAuth';
import useInput from 'hooks/useInput';
import * as S from './styles';

function Login() {
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');
  const { setAuth, setLogin } = useAuth();
  const navigate = useNavigate();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !password) alert('아이디와 비밀번호를 입력해주세요');

    requestLogin({ id, password })
      .then(({ username, accessToken }) => {
        setAuth(accessToken);
        setLogin({ id, nickname: username });
        navigate('/');
        alert(`${username}님, 환영합니다!`);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <S.Container>
      <S.CardContainer>
        <S.Form onSubmit={login}>
          <label>
            <span>아이디</span>
            <input type="text" value={id} onChange={setId} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" value={password} onChange={setPassword} />
          </label>
          <S.Button>로그인</S.Button>
        </S.Form>
        <Link to="/signup">계정이 없으신가요?</Link>
      </S.CardContainer>
    </S.Container>
  );
}

export default Login;
