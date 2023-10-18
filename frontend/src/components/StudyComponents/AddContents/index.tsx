import * as S from './styles';
import { useState } from 'react';
import MarkDown from 'components/Markdown';
import { SubmitNewContentType } from '../StudyDetail';

interface AddContentsProps {
  chapterIndex: number;
  setModeView: () => void;
  submitContents: ({
    chapterIndex,
    title,
    contents,
  }: SubmitNewContentType) => void;
}

function AddContents({
  chapterIndex,
  setModeView,
  submitContents,
}: AddContentsProps) {
  const [contents, setContents] = useState('');
  const [title, setTitle] = useState('');

  const cancelAddContents = () => {
    setModeView();
  };

  return (
    <S.Container>
      <h3>
        문서 추가 :
        <S.TitleInput
          type="text"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        ></S.TitleInput>
      </h3>
      <S.ContentArea>
        <S.ModifyArea>
          <textarea
            value={contents}
            onChange={e => setContents(e.currentTarget.value)}
          />
        </S.ModifyArea>
        <S.PreviewArea>
          <MarkDown>{contents}</MarkDown>
        </S.PreviewArea>
      </S.ContentArea>
      <S.ButtonArea>
        <S.SubmitButton
          onClick={() =>
            submitContents({
              chapterIndex,
              title,
              contents,
            })
          }
        >
          추가
        </S.SubmitButton>
        <S.CancelButton onClick={cancelAddContents}>취소</S.CancelButton>
      </S.ButtonArea>
    </S.Container>
  );
}

export default AddContents;
