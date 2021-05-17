import {createSelector} from 'reselect';
import {RootState} from '..';

export const selectCommentsIds = (state: RootState) =>
  state.comments.map(comment => comment.id);

export const selectCommentById = createSelector(
  (state: RootState) => state.comments,
  (_: RootState, id: number) => id,
  (comments, id) => comments.find(comment => comment.id === id),
);

export const selectCommentsIdsByPrayerId = createSelector(
  (state: RootState) => state.comments,
  (_: RootState, prayerId: number) => prayerId,
  (comments, prayerId) =>
    comments
      .filter(comment => comment.prayerId === prayerId)
      .map(comment => comment.id),
);
