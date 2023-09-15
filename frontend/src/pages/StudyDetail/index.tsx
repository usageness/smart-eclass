import * as S from './styles';
import { useEffect, useState } from 'react';
import { requestGetStudy } from 'apis/request/study';
import { useParams } from 'react-router-dom';
import { study } from 'types/study';

function StudyDetail() {
  const [study, setStudy] = useState<null | study>(null);
  const { id } = useParams();

  const getStudy = () => {
    if (!id) {
      return;
    }

    requestGetStudy(id)
      .then(data => {
        setStudy(data);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getStudy();
    console.log(id);
  }, []);

  return (
    <>
      {study ? (
        <S.Container>
          <S.Card>
            <S.CardHeader>
              <S.TitleContainer>
                <S.Title>{study.studyname}</S.Title>
                <S.IsOpen>{study.isopen ? '진행중' : '종료'}</S.IsOpen>
              </S.TitleContainer>
              <S.TeacherContainer>
                <S.Emblem />
                {study.teacher}
              </S.TeacherContainer>
            </S.CardHeader>
            <S.Content>
              <S.Introduction>{study.introduction}</S.Introduction>
              {study.students}
              {study.comments}
            </S.Content>
          </S.Card>
          {/* {JSON.stringify(study)} */}
        </S.Container>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default StudyDetail;
