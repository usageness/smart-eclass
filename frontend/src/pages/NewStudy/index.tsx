import * as S from './styles';
import { useEffect, useState } from 'react';
import { requestCreateStudy } from 'apis/request/study';

function NewStudy() {
  const [title, setTitle] = useState('');
  const [description, setdDescription] = useState('');

  const createStudy = (title: string, description: string) => {
    requestCreateStudy(title, description)
      .then(() => {
        alert('스터디가 생성되었습니다.');
        location.href = '/';
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      <S.Container>
        <S.Title>새 스터디를 생성합니다</S.Title>
        <S.Input
          type="text"
          placeholder="스터디 제목"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
        <S.Description>
          * 스터디를 잘 나타낼 수 있는 제목을 작성해주세요.
        </S.Description>
        <S.Input
          type="text"
          placeholder="스터디 설명"
          value={description}
          onChange={e => setdDescription(e.currentTarget.value)}
        />
        <S.Description>
          * 스터디에 대한 설명을 자세히 작성해주세요.
        </S.Description>
        <S.CreateStudyButton onClick={() => createStudy(title, description)}>
          생성
        </S.CreateStudyButton>
      </S.Container>
    </>
  );
}

export default NewStudy;
