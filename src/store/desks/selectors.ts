import {createSelector} from 'reselect';
import {RootState} from '../../store';

export const selectColumns = (state: RootState) =>
  state.desks.map(column => column.id);

export const selectColumnById = createSelector(
  (state: RootState) => state.desks,
  (_: RootState, id: string) => id,
  (desks, id) => desks.find(desk => desk.id === id),
);
