import * as S from '../styles';
import {
  StudyChapterProps,
  StudyIndexProps,
  StudySubjectProps,
} from 'types/study';

interface contentsIndexProps {
  parsedContents: StudyChapterProps[];
  viewContent: ({ chapterIndex, subIndex }: StudyIndexProps) => void;
}

function ContentsIndex({ parsedContents, viewContent }: contentsIndexProps) {
  return (
    <S.ChapterTable>
      {parsedContents.map(
        (
          { chapterTitle, chapterList }: StudyChapterProps,
          chapterIndex: number,
        ) => (
          <S.ChapterWrapper key={chapterTitle}>
            <S.ChapterHead>{chapterTitle}</S.ChapterHead>
            {chapterList.map(({ subTitle }: StudySubjectProps, subIndex) => (
              <S.ChapterItem
                key={subTitle}
                onClick={() => viewContent({ chapterIndex, subIndex })}
              >
                <p>{subTitle}</p>
              </S.ChapterItem>
            ))}
          </S.ChapterWrapper>
        ),
      )}
    </S.ChapterTable>
  );
}

export default ContentsIndex;
