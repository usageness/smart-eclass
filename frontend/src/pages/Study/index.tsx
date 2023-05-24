import * as S from './styles';
import StudyList from 'components/StudyList';
import { requestStudy } from 'apis/request/study';
import { useEffect, useState } from 'react';
import { studyList } from 'types/study';

function Study() {
  const [studyList, setStudyList] = useState<null | studyList>(null);

  const getStudyList = () => {
    requestStudy()
      .then(data => {
        setStudyList(data);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getStudyList();
  }, []);

  return (
    <>
      {studyList ? (
        <S.Container>
          <S.Title>진행하는 스터디</S.Title>
          <StudyList data={studyList.teacher} />
          <S.Title>참여한 스터디</S.Title>
          <StudyList data={studyList.students} />
        </S.Container>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default Study;
