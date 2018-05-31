import appReducer from './app';
import { ADDING_CARD, EDITING_CARD } from '../actions/constant';

describe('appReducer', () => {
  it('should return the initial state', () => {
    expect(appReducer({}, {})).toEqual({});
  });

  it('should handle ADDING_CARD', () => {
    expect(
      appReducer(
        {},
        {
          type: ADDING_CARD,
        }
      )
    ).toEqual({
      operation: ADDING_CARD,
    });
  });

  it('should handle EDITING_CARD', () => {
    expect(
      appReducer(
        {},
        {
          type: EDITING_CARD,
        }
      )
    ).toEqual({
      operation: EDITING_CARD,
    });
  });
});
