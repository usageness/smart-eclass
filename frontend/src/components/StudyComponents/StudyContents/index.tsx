import { useState } from 'react';
import * as S from './styles';

interface StudyContentsProps {
  contents: string;
}

interface StudyChapterProps {
  chapterTitle: string;
  chapterList: Array<StudySubjectProps>;
}

interface StudySubjectProps {
  subTitle: string;
  content: string;
}

interface StudyIndexProps {
  chapterIndex: number;
  subIndex: number;
}

function StudyContents({ contents }: StudyContentsProps) {
  const [content, setContent] = useState('');
  const parsedContents = JSON.parse(contents) as Array<StudyChapterProps>;

  const viewContent = ({ chapterIndex, subIndex }: StudyIndexProps) => {
    setContent(parsedContents[chapterIndex].chapterList[subIndex].content);
  };

  return (
    <S.ChapterContainer>
      <S.ChapterTable>
        {parsedContents.map(
          (
            { chapterTitle, chapterList }: StudyChapterProps,
            chapterIndex: number,
          ) => (
            <div key={chapterTitle}>
              <S.ChapterHead>{chapterTitle}</S.ChapterHead>
              {chapterList.map(({ subTitle }: StudySubjectProps, subIndex) => (
                <S.ChapterItem
                  key={subTitle}
                  onClick={() => viewContent({ chapterIndex, subIndex })}
                >
                  <p>{subTitle}</p>
                </S.ChapterItem>
              ))}
            </div>
          ),
        )}
      </S.ChapterTable>
      <S.ChapterContents>{content}</S.ChapterContents>
    </S.ChapterContainer>
  );
}

export default StudyContents;
