export interface studyList {
  teacher: Array<study>;
  students: Array<study>;
}

export interface study {
  id: string;
  studyname: string;
  teacher: string;
  students: string;
  comments: string;
  introduction: string;
  class: string;
  isopen: boolean;
}

export interface StudyChapterProps {
  chapterTitle: string;
  chapterList: Array<StudySubjectProps>;
}

export interface StudySubjectProps {
  subTitle: string;
  content: string;
}

export interface StudyIndexProps {
  chapterIndex: number;
  subIndex: number;
}
