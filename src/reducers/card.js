/**
 *  card reducer
 */

import uuidv1 from 'uuid/v1';
// Import Action Types
import {
  ADDING_CARD,
  UPDATE_CARD,
  SAVING_CARD,
  CLEAR_CARD,
  EDITING_CARD,
  EDITING_CARD_SAVE,
} from '../actions/constant';

function card(state = {}, action) {
  switch (action.type) {
    case ADDING_CARD:
      return {
        id: uuidv1(),
        columnId: action.data.columnId,
      };
    case UPDATE_CARD:
      return {
        ...action.data.card,
      };
    case SAVING_CARD:
    case CLEAR_CARD:
      return {};
    case EDITING_CARD:
      return {
        ...action.data.card,
      };
    case EDITING_CARD_SAVE:
      return {};
    default:
      return state;
  }
}

export default card;
