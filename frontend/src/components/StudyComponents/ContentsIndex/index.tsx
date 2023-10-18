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
  setModeAdd: (chapterIndex: number) => void;
}

function ContentsIndex({
  parsedContents,
  viewContent,
  isTeacher,
  setModeAdd,
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
              <S.AddButton onClick={() => setModeAdd(chapterIndex)}>
                <img src={Plus} alt="add content" />
              </S.AddButton>
            ) : (
              <div />
            )}
          </S.ChapterWrapper>
        ),
      )}
    </S.ChapterTable>
  );
}

export default ContentsIndex;
