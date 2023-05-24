import { study } from 'types/study';
import * as S from './styles';

interface StudyList {
  data: Array<study>;
}

function StudyList({ data }: StudyList) {
  return (
    <S.Container>
      {data.map(({ studyname, teacher }) => (
        <S.Study>
          <S.Title>{studyname}</S.Title>
          <S.Teacher>{teacher}</S.Teacher>
        </S.Study>
      ))}
    </S.Container>
  );
}

export default StudyList;
