import { axios, axiosWithAccessToken } from '../axios';
import { study, studyList } from 'types/study';

const requestAllStudy = (): Promise<Array<study>> => {
  return axios.get('/study/all').then(res => res.data);
};

const requestStudy = (): Promise<studyList> => {
  return axiosWithAccessToken.get('/study').then(res => res.data);
};

const requestGetStudy = (id: string): Promise<study> => {
  return axiosWithAccessToken.get(`/study/${id}`).then(res => res.data);
};

const requestJoinStudy = (id: string): Promise<any> => {
  return axiosWithAccessToken.post(`/study/join/${id}`).then(res => res.data);
};

const requestModifyStudyContents = (
  id: string,
  modifyData: { stringifyClass: string },
): Promise<study> => {
  return axiosWithAccessToken
    .patch(`/study/${id}`, modifyData)
    .then(res => res.data);
};

export {
  requestAllStudy,
  requestStudy,
  requestGetStudy,
  requestJoinStudy,
  requestModifyStudyContents,
};
