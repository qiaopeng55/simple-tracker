import {
  DROP_CARD_TO_COLUMN,
  DROP_CARD_ON_CARD,
  ADDING_CARD,
  UPDATE_CARD,
  SAVING_CARD,
  DELETE_CARD,
  CLEAR_CARD,
  EDITING_CARD,
  EDITING_CARD_SAVE,
} from './constant';

export const dropCardToColumn = (cardId, columnId) => ({
  type: DROP_CARD_TO_COLUMN,
  data: {
    cardId,
    columnId,
  },
});

export const dropCardOnCard = (cardId, targetCardId) => ({
  type: DROP_CARD_ON_CARD,
  data: {
    cardId,
    targetCardId,
  },
});

export const addingCard = columnId => ({
  type: ADDING_CARD,
  data: {
    columnId,
  },
});

export const updateCard = card => ({
  type: UPDATE_CARD,
  data: {
    card,
  },
});

export const savingCard = card => ({
  type: SAVING_CARD,
  data: {
    card,
  },
});

export const deleteCard = cardId => ({
  type: DELETE_CARD,
  data: {
    cardId,
  },
});

export const clearCard = () => ({
  type: CLEAR_CARD,
});

export const editingCard = card => ({
  type: EDITING_CARD,
  data: {
    card,
  },
});

export const editingCardSave = card => ({
  type: EDITING_CARD_SAVE,
  data: {
    card,
  },
});
