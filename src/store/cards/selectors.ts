import {createSelector} from 'reselect';
import {RootState} from '..';

export const selectCardsIds = (state: RootState) =>
  state.cards.map(card => card.id);

export const selectSubscribedCardsIds = (state: RootState) =>
  state.cards.filter(card => card.subscribed === true).map(card => card.id);

export const selectCheckedCardsIds = (state: RootState) =>
  state.cards.filter(card => card.checked === true).map(card => card.id);

export const selectUncheckedCardsIds = (state: RootState) =>
  state.cards.filter(card => card.checked === false).map(card => card.id);

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
