import swapArrayItems from '../utils/swap-array-items';
import getCardIndex from '../utils/get-card-index';

import {
  DROP_CARD_TO_COLUMN,
  DROP_CARD_ON_CARD,
  SAVING_CARD,
  DELETE_CARD,
  EDITING_CARD_SAVE,
} from '../actions/constant';

/**
 *  columns reducer
 */

export const cardsInitialState = [
  {
    id: 1,
    text: 'task 1',
    columnId: 1,
  },
  {
    id: 2,
    text: 'task 2',
    columnId: 1,
  },
  {
    id: 3,
    text: 'task 3',
    columnId: 1,
  },
  {
    id: 4,
    text: 'task 4',
    columnId: 2,
  },
  {
    id: 5,
    text: 'task 5',
    columnId: 2,
  },
  {
    id: 6,
    text: 'task 6',
    columnId: 2,
  },
  {
    id: 7,
    text: 'task 7',
    columnId: 2,
  },
  {
    id: 8,
    text: 'task 8',
    columnId: 3,
  },
  {
    id: 9,
    text: 'task 9',
    columnId: 3,
  },
];

function columns(state = cardsInitialState, action) {
  switch (action.type) {
    case DROP_CARD_TO_COLUMN:
      return state.map(
        card =>
          card.id === action.data.cardId
            ? {
                ...card,
                columnId: action.data.columnId,
              }
            : card
      );
    case DROP_CARD_ON_CARD:
      return swapArrayItems(
        state,
        getCardIndex(state, action.data.cardId),
        getCardIndex(state, action.data.targetCardId)
      );
    case SAVING_CARD:
      return [...state, action.data.card];
    case DELETE_CARD:
      return state.filter(card => card.id !== action.data.cardId);
    case EDITING_CARD_SAVE:
      return state.map(
        card =>
          card.id === action.data.card.id
            ? {
                ...action.data.card,
              }
            : card
      );
    default:
      return state;
  }
}

export default columns;
