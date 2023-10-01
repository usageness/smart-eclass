import * as S from './styles';
import { useEffect, useState } from 'react';
import { requestGetStudy, requestJoinStudy } from 'apis/request/study';
import { useParams } from 'react-router-dom';
import { study } from 'types/study';
import Comments from 'components/Comments';
import useAuth from 'hooks/useAuth';

function StudyDetail() {
  const [study, setStudy] = useState<null | study>(null);
  const [isStudying, setIsStudying] = useState(false);
  const { id } = useParams();
  const { isLogin, user } = useAuth();

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

  const joinStudy = () => {
    if (!isLogin || !id) {
      alert('로그인이 필요합니다.');
      return;
    }

    requestJoinStudy(id)
      .then(data => console.log(data))
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getStudy();
  }, []);

  useEffect(() => {
    if (!study || !user) {
      setIsStudying(false);
      return;
    }

    const students = JSON.parse(study.students) as Array<string>;

    if (students.includes(user.userid)) {
      setIsStudying(true);
    }
    console.log(isStudying);
  }, [study]);

  if (!study) return <p>loading</p>;

  return (
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
          <h3>강의 소개</h3>
          <S.Introduction>{study.introduction}</S.Introduction>
          <h3>수강평</h3>
          <Comments commentList={study.comments} />
        </S.Content>
        <S.CardFooter>
          {!isStudying ? (
            <S.JoinButton onClick={joinStudy}>수강하기</S.JoinButton>
          ) : (
            <p>수강중인 스터디입니다.</p>
          )}
        </S.CardFooter>
      </S.Card>
    </S.Container>
  );
}

export default StudyDetail;
