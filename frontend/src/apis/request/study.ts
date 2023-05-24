import { axiosWithAccessToken } from '../axios';
import { studyList } from 'types/study';

const requestStudy = (): Promise<studyList> => {
  return axiosWithAccessToken.get('/study').then(res => res.data);
};

export { requestStudy };
