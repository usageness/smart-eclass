import * as S from './styles';
import { useState } from 'react';
import MarkDown from 'components/Markdown';
import { currentDocumentData, modifyContentType } from '../StudyDetail';

interface currentContents {
  documentIndex: currentDocumentData;
  currentDocument: string;
  content: string;
  setModeRead: () => void;
  submitModification: ({
    documentIndex,
    modifyContent,
    currentDocumentTitle,
  }: modifyContentType) => void;
}

function ModifyContents({
  documentIndex,
  currentDocument,
  content,
  setModeRead,
  submitModification,
}: currentContents) {
  const [modifyContent, setModifyContent] = useState(content);
  const [currentDocumentTitle, setCurrentDocumentTitle] =
    useState(currentDocument);

  const cancelModification = () => {
    setModeRead();
  };

  return (
    <S.Container>
      <h3>
        문서 수정 :
        <S.TitleInput
          type="text"
          value={currentDocumentTitle}
          onChange={e => setCurrentDocumentTitle(e.currentTarget.value)}
        ></S.TitleInput>
      </h3>
      <S.ContentArea>
        <S.ModifyArea>
          <textarea
            value={modifyContent}
            onChange={e => setModifyContent(e.currentTarget.value)}
          />
        </S.ModifyArea>
        <S.PreviewArea>
          <MarkDown>{modifyContent}</MarkDown>
        </S.PreviewArea>
      </S.ContentArea>
      <S.ButtonArea>
        <S.SubmitButton
          onClick={() =>
            submitModification({
              documentIndex,
              modifyContent,
              currentDocumentTitle,
            })
          }
        >
          수정
        </S.SubmitButton>
        <S.CancelButton onClick={cancelModification}>취소</S.CancelButton>
      </S.ButtonArea>
    </S.Container>
  );
}

export default ModifyContents;
