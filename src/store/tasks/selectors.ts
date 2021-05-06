import {createSelector} from 'reselect';
import {RootState} from '../../store';

export const selectTasksIds = (state: RootState) =>
  state.tasks.map(task => task.id);

export const selectSubscribedTasksIds = (state: RootState) =>
  state.tasks.filter(task => task.subscribed === true).map(task => task.id);

export const selectAnsweredTasksIds = (state: RootState) =>
  state.tasks.filter(task => task.answered === true).map(task => task.id);

export const selectUnansweredTasksIds = (state: RootState) =>
  state.tasks.filter(task => task.answered === false).map(task => task.id);

export const selectTaskById = createSelector(
  (state: RootState) => state.tasks,
  (_: RootState, id: string) => id,
  (tasks, id) => tasks.find(task => task.id === id),
);

export const selectTasksIdsByDeskId = createSelector(
  (state: RootState) => state.tasks,
  (_: RootState, deskId: string) => deskId,
  (tasks, deskId) =>
    tasks.filter(task => task.deskId === deskId).map(task => task.id),
);

// export const selectTasksSubscribed = createSelector(
//   (state: RootState) => state.tasks,
//   (_: RootState, subscribed: boolean) => subscribed,
//   (tasks, subscribed) => tasks.find(task => task.subscribed === true),
// );
