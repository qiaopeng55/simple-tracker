import columnsReducer, { columnsInitialState } from './columns';

describe('columnsReducer', () => {
  it('should return the initial state', () => {
    expect(columnsReducer(columnsInitialState, {})).toEqual(
      columnsInitialState
    );
  });
});
