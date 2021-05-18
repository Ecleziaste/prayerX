import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Comment} from './slice';

export const getCommentsApi = (): AxiosPromise<Comment> => {
  return http.get('/comments');
};

export const createCommentApi = (
  payload: createComment,
): AxiosPromise<Comment> => {
  const {prayerId, ...body} = payload;
  return http.post(`/prayers/${String(prayerId)}/comments`, body);
};

type createComment = {
  body: string;
  prayerId: number;
};
