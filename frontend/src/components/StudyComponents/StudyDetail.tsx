import * as S from './styles';
import { useParams } from 'react-router-dom';
import { study } from 'types/study';
import useAuth from 'hooks/useAuth';
import StudyContents from './StudyContents';

interface StudyDetailProps {
  study: study;
}

function StudyDetail({ study }: StudyDetailProps) {
  const { id } = useParams();
  const { isLogin, user } = useAuth();

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
          <h3>컨텐츠</h3>
          <StudyContents contents={study.class} />
        </S.Content>
        <S.CardFooter></S.CardFooter>
      </S.Card>
    </S.Container>
  );
}

export default StudyDetail;
