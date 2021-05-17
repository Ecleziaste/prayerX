import {createSelector} from 'reselect';
import {RootState} from '..';

export const selectCardsIds = (state: RootState) =>
  state.cards.map(card => card.id);

export const selectSubscribedCardsIds = (state: RootState) =>
  state.cards.filter(card => card.subscribed === true).map(card => card.id);

export const selectAnsweredCardsIds = (state: RootState) =>
  state.cards.filter(card => card.answered === true).map(card => card.id);

export const selectUnansweredCardsIds = (state: RootState) =>
  state.cards.filter(card => card.answered === false).map(card => card.id);

export const selectCardById = createSelector(
  (state: RootState) => state.cards,
  (_: RootState, id: number) => id,
  (cards, id) => cards.find(card => card.id === id),
);

export const selectCardsIdsByColumnId = createSelector(
  (state: RootState) => state.cards,
  (_: RootState, columnId: number) => columnId,
  (cards, columnId) =>
    cards.filter(card => card.columnId === columnId).map(card => card.id),
);

// export const selectTasksSubscribed = createSelector(
//   (state: RootState) => state.tasks,
//   (_: RootState, subscribed: boolean) => subscribed,
//   (tasks, subscribed) => tasks.find(task => task.subscribed === true),
// );
