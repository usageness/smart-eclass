import { Link } from 'react-router-dom';
import { study } from 'types/study';
import * as S from './styles';

interface StudyList {
  data: Array<study>;
}

function StudyList({ data }: StudyList) {
  return (
    <S.Container>
      {data.map(({ id, studyname, teacher }) => (
        <Link to={`/study/${id}`}>
          <S.Study key={studyname}>
            <S.Title>{studyname}</S.Title>
            <S.Teacher>{teacher}</S.Teacher>
          </S.Study>
        </Link>
      ))}
    </S.Container>
  );
}

export default StudyList;
