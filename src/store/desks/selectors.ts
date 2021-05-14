import {createSelector} from 'reselect';
import {RootState} from '../../store';

export const selectDesks = (state: RootState) =>
  state.desks.map(desk => desk.id);

export const selectDeskById = createSelector(
  (state: RootState) => state.desks,
  (_: RootState, id: number) => id,
  (desks, id) => desks.find(desk => desk.id === id),
);
