import * as S from '../styles';
import {
  StudyChapterProps,
  StudyIndexProps,
  StudySubjectProps,
} from 'types/study';
import Plus from 'assets/plus.svg';

interface contentsIndexProps {
  parsedContents: StudyChapterProps[];
  viewContent: ({ chapterIndex, subIndex }: StudyIndexProps) => void;
  isTeacher: boolean;
  setModeAddContents: (chapterIndex: number) => void;
  setModeAddChapter: () => void;
}

function ContentsIndex({
  parsedContents,
  viewContent,
  isTeacher,
  setModeAddContents,
  setModeAddChapter,
}: contentsIndexProps) {
  return (
    <S.ChapterTable>
      {parsedContents.map(
        (
          { chapterTitle, chapterList }: StudyChapterProps,
          chapterIndex: number,
        ) => (
          <S.ChapterWrapper key={`${chapterTitle}${chapterIndex}`}>
            <S.ChapterHead>{chapterTitle}</S.ChapterHead>
            {chapterList.map(({ subTitle }: StudySubjectProps, subIndex) => (
              <S.ChapterItem
                key={subTitle}
                onClick={() => viewContent({ chapterIndex, subIndex })}
              >
                <p>{subTitle}</p>
              </S.ChapterItem>
            ))}
            {isTeacher ? (
              <S.AddButton onClick={() => setModeAddContents(chapterIndex)}>
                <img src={Plus} alt="add content" />
              </S.AddButton>
            ) : (
              <div />
            )}
          </S.ChapterWrapper>
        ),
      )}
      {isTeacher ? (
        <S.ChapterWrapper>
          <S.AddButton onClick={setModeAddChapter}>
            <img src={Plus} alt="add chapter" />
          </S.AddButton>
        </S.ChapterWrapper>
      ) : (
        <div />
      )}
    </S.ChapterTable>
  );
}

export default ContentsIndex;
