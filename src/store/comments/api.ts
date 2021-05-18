import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Comment} from './slice';

export const CommentsApi = (): AxiosPromise<Comment> => {
  return http.get('/comments');
};

export const addCommentApi = (payload: AddComment): AxiosPromise<Comment> => {
  return http.post('/comments', payload);
};

type AddComment = {
  body: string;
  prayerId: number;
};
