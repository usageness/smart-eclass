import * as S from './styles';
import Books from 'assets/books.png';

function Main() {
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
      메인
    </S.Container>
  );
}

export default Main;
