import { useNavigate } from 'react-router-dom';
import { requestSignup } from 'apis/request/auth';
import useInput from 'hooks/useInput';
import * as S from './styles';

function Signup() {
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useInput('');
  const [username, setUsername] = useInput('');
  const navigate = useNavigate();

  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !password || !passwordConfirm) alert('입력칸을 모두 채워주세요');

    if (password !== passwordConfirm)
      alert('비밀번호 확인이 일치하지 않습니다.');

    requestSignup({ userid: id, password, username })
      .then(() => {
        navigate('/login');
        alert(`가입이 완료되었습니다. 새로운 아이디로 로그인해주세요.`);
      })
      .catch(error => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <S.CardContainer>
        <S.Form onSubmit={signup}>
          <label>
            <span>아이디</span>
            <input type="text" value={id} onChange={setId} />
            <p>아이디는 2~19자의 영문과 숫자 조합이어야 합니다.</p>
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" value={password} onChange={setPassword} />
            <p>
              비밀번호는 8~19자의 영문과 숫자, 특수문자의 조합이어야 합니다.
            </p>
          </label>
          <label>
            <span>비밀번호 확인</span>
            <input
              type="password"
              value={passwordConfirm}
              onChange={setPasswordConfirm}
            />
          </label>
          <label>
            <span>닉네임</span>
            <input type="text" value={username} onChange={setUsername} />
            <p>닉네임은 1~19자 사이어야 합니다.</p>
          </label>
          <S.Button>가입하기</S.Button>
        </S.Form>
      </S.CardContainer>
    </S.Container>
  );
}

export default Signup;
