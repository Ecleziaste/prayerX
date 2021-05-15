import {createSelector} from 'reselect';
import {RootState} from '..';

export const selectColumns = (state: RootState) =>
  state.columns.map(column => column.id);

export const selectColumnById = createSelector(
  (state: RootState) => state.columns,
  (_: RootState, id: number) => id,
  (columns, id) => columns.find(column => column.id === id),
);
