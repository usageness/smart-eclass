import * as S from './styles';
import { useParams } from 'react-router-dom';
import {
  study,
  StudyChapterProps,
  StudyIndexProps,
  StudySubjectProps,
} from 'types/study';
import useAuth from 'hooks/useAuth';
import Markdown from 'react-markdown';
import { useState } from 'react';
import ContentsIndex from './ContentsIndex';

interface StudyDetailProps {
  study: study;
}

function StudyDetail({ study }: StudyDetailProps) {
  const { id } = useParams();
  const { isLogin, user } = useAuth();
  const [content, setContent] = useState('');
  const [currentDocument, setCurrentDocument] = useState<string | null>(null);
  const parsedContents = JSON.parse(study.class) as Array<StudyChapterProps>;

  const viewContent = ({ chapterIndex, subIndex }: StudyIndexProps) => {
    setContent(parsedContents[chapterIndex].chapterList[subIndex].content);
    setCurrentDocument(
      parsedContents[chapterIndex].chapterList[subIndex].subTitle,
    );
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
            <>
              <span>
                <h3>
                  <S.BackwardButton onClick={() => setCurrentDocument(null)}>
                    ←
                  </S.BackwardButton>
                  {currentDocument}
                </h3>
              </span>
              <S.ChapterContainer>
                <S.ChapterContents>
                  <Markdown>{content}</Markdown>
                </S.ChapterContents>
              </S.ChapterContainer>
            </>
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
