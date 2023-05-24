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
  isopen: boolean;
}
