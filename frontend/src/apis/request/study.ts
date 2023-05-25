import { axiosWithAccessToken } from '../axios';
import { study, studyList } from 'types/study';

const requestStudy = (): Promise<studyList> => {
  return axiosWithAccessToken.get('/study').then(res => res.data);
};

const requestGetStudy = (id: string): Promise<study> => {
  return axiosWithAccessToken.get(`/study/${id}`).then(res => res.data);
};

export { requestStudy, requestGetStudy };
