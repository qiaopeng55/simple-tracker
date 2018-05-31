/**
 *  App reducer
 *  manage key app state here
 */

// Import Action Types
import { ADDING_CARD, EDITING_CARD } from '../actions/constant';

function App(state = {}, action) {
  switch (action.type) {
    case ADDING_CARD:
      return {
        operation: ADDING_CARD,
      };
    case EDITING_CARD:
      return {
        operation: EDITING_CARD,
      };
    default:
      return state;
  }
}

export default App;
