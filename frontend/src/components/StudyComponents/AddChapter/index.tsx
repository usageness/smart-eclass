import * as S from './styles';
import { useState } from 'react';
import { SubmitNewChapterType } from '../StudyDetail';

interface AddChapterProps {
  setModeView: () => void;
  submitChapter: ({ title }: SubmitNewChapterType) => void;
}

function AddChapter({ setModeView, submitChapter }: AddChapterProps) {
  const [title, setTitle] = useState('');

  const cancelAddChapter = () => {
    setModeView();
  };

  return (
    <S.Container>
      <h3>챕터 제목을 입력해주세요.</h3>
      <S.TitleInput
        type="text"
        value={title}
        onChange={e => setTitle(e.currentTarget.value)}
        placeholder="제목"
      ></S.TitleInput>
      <S.ButtonArea>
        <S.SubmitButton
          onClick={() =>
            submitChapter({
              title,
            })
          }
        >
          추가
        </S.SubmitButton>
        <S.CancelButton onClick={cancelAddChapter}>취소</S.CancelButton>
      </S.ButtonArea>
    </S.Container>
  );
}

export default AddChapter;
