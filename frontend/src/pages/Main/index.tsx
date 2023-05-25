import * as S from './styles';
import { useState, useEffect } from 'react';
import Books from 'assets/books.png';
import { requestAllStudy } from 'apis/request/study';
import { study } from 'types/study';
import StudyList from 'components/StudyList';

function Main() {
  const [studyList, setStudyList] = useState<null | Array<study>>(null);

  const getAllStudyList = () => {
    requestAllStudy()
      .then(data => {
        setStudyList(data);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getAllStudyList();
  }, []);
  return (
    <S.Container>
      <S.Notice>
        <S.SampleNotice>
          <S.NoticeDiv>
            <S.NoticeText>
              <p>자유롭게 만들고</p>
              <p>초대하세요</p>
            </S.NoticeText>
            <img src={Books} alt="book icon" />
          </S.NoticeDiv>
        </S.SampleNotice>
      </S.Notice>
      <S.Title>진행중인 스터디들을 살펴보세요✨</S.Title>
      {studyList && <StudyList data={studyList} />}
    </S.Container>
  );
}

export default Main;
