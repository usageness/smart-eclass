import * as S from './styles';
import MarkDown from 'components/Markdown';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { study, StudyChapterProps, StudyIndexProps } from 'types/study';
import ContentsIndex from './ContentsIndex';
import ModifyContents from './ModifyContents';
import Pencil from 'assets/pencil.svg';
import { requestModifyStudyContents } from 'apis/request/study';

interface StudyDetailProps {
  study: study;
  isTeacher: boolean;
  getDataStale: () => void;
}

export interface modifyContentType {
  documentIndex: currentDocumentData;
  modifyContent: string;
  currentDocumentTitle: string;
}

export interface currentDocumentData {
  chapterIndex: number;
  subIndex: number;
}

function StudyDetail({ study, isTeacher, getDataStale }: StudyDetailProps) {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [isModify, setIsModify] = useState(false);
  const [currentDocument, setCurrentDocument] = useState<string | null>(null);
  const [documentIndex, setDocumentIndex] =
    useState<currentDocumentData | null>(null);

  if (!id) return <></>;

  const parsedContents = JSON.parse(study.class) as Array<StudyChapterProps>;

  const viewContent = ({ chapterIndex, subIndex }: StudyIndexProps) => {
    setContent(parsedContents[chapterIndex].chapterList[subIndex].content);
    setCurrentDocument(
      parsedContents[chapterIndex].chapterList[subIndex].subTitle,
    );
    setDocumentIndex({ chapterIndex, subIndex });
  };

  const setModeModify = () => {
    setIsModify(true);
  };

  const setModeRead = () => {
    setIsModify(false);
  };

  const submitModification = ({
    documentIndex,
    modifyContent,
    currentDocumentTitle,
  }: modifyContentType) => {
    const { chapterIndex, subIndex } = documentIndex;

    parsedContents[chapterIndex].chapterList[subIndex].content = modifyContent;
    parsedContents[chapterIndex].chapterList[subIndex].subTitle =
      currentDocumentTitle;

    console.log(JSON.stringify(parsedContents));

    requestModifyStudyContents(id, {
      stringifyClass: JSON.stringify(parsedContents),
    })
      .then(() => {
        alert(`수정 완료.`);
        setModeRead();
        getDataStale();
      })
      .catch(error => {
        console.log(error);
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
          {currentDocument ? (
            isModify && documentIndex ? (
              <ModifyContents
                documentIndex={documentIndex}
                currentDocument={currentDocument}
                content={content}
                setModeRead={setModeRead}
                submitModification={submitModification}
              />
            ) : (
              <>
                <S.DocumentHeader>
                  <div>
                    <S.BackwardButton onClick={() => setCurrentDocument(null)}>
                      ←
                    </S.BackwardButton>
                    <h3>{currentDocument}</h3>
                  </div>
                  {isTeacher ? (
                    <S.ModifyButton onClick={setModeModify}>
                      <img src={Pencil} alt="modify content" />
                    </S.ModifyButton>
                  ) : (
                    <></>
                  )}
                </S.DocumentHeader>
                <S.ChapterContainer>
                  <S.ChapterContents>
                    <MarkDown>{content}</MarkDown>
                  </S.ChapterContents>
                </S.ChapterContainer>
              </>
            )
          ) : (
            <>
              <h3>컨텐츠</h3>
              <S.ChapterContainer>
                <ContentsIndex
                  parsedContents={parsedContents}
                  viewContent={viewContent}
                />
              </S.ChapterContainer>
            </>
          )}
        </S.Content>
        <S.CardFooter></S.CardFooter>
      </S.Card>
    </S.Container>
  );
}

export default StudyDetail;
