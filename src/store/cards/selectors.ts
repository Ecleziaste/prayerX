import {createSelector} from 'reselect';
import {RootState} from '..';

export const selectCardsIds = (state: RootState) =>
  state.cards.map(card => card.id);

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

export const selectCheckedCardsIdsByColumnId = createSelector(
  (state: RootState) => state.cards,
  (_: RootState, columnId: number) => columnId,
  (cards, columnId) =>
    cards
      .filter(card => card.columnId === columnId && card.checked === true)
      .map(card => card.id),
);

export const selectUncheckedCardsIdsByColumnId = createSelector(
  (state: RootState) => state.cards,
  (_: RootState, columnId: number) => columnId,
  (cards, columnId) =>
    cards
      .filter(card => card.columnId === columnId && card.checked === false)
      .map(card => card.id),
);
