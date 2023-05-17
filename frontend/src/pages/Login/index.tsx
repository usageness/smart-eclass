import useInput from 'hooks/useInput';
import { Link } from 'react-router-dom';
import * as S from './styles';

function Login() {
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');

  const requestLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('준비중');
  };

  return (
    <S.Container>
      <S.CardContainer>
        <S.Form onSubmit={requestLogin}>
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
