import * as S from './styles';
import { requestJoinStudy } from 'apis/request/study';
import { useParams } from 'react-router-dom';
import { study } from 'types/study';
import Comments from 'components/Comments';
import useAuth from 'hooks/useAuth';

interface StudyIntroductionProps {
  study: study;
}

function StudyIntroduction({ study }: StudyIntroductionProps) {
  const { id } = useParams();
  const { isLogin, user } = useAuth();

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
          <S.JoinButton onClick={joinStudy}>수강하기</S.JoinButton>
        </S.CardFooter>
      </S.Card>
    </S.Container>
  );
}

export default StudyIntroduction;
