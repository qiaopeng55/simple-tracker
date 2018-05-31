import rootReducer from './index';
import { cardsInitialState } from './cards';
import { columnsInitialState } from './columns';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    const expectedState = {
      app: {},
      card: {},
      cards: cardsInitialState,
      columns: columnsInitialState,
      router: {
        location: null,
      },
    };

    expect(rootReducer({}, {})).toEqual(expectedState);
  });
});
