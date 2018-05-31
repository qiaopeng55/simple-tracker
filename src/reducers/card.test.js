import mockId from '../../__mocks__/uuid/mockId';
import cardReducer from './card';
import {
  ADDING_CARD,
  UPDATE_CARD,
  SAVING_CARD,
  CLEAR_CARD,
  EDITING_CARD,
  EDITING_CARD_SAVE,
} from '../actions/constant';

describe('cardReducer', () => {
  it('should return the initial state', () => {
    expect(cardReducer({}, {})).toEqual({});
  });

  it('should handle ADDING_CARD', () => {
    const columnId = 1;

    expect(
      cardReducer(
        {},
        {
          type: ADDING_CARD,
          data: {
            columnId,
          },
        }
      )
    ).toEqual({
      id: mockId, // uuidv1 function will be auto mocked
      columnId,
    });
  });

  it('should handle UPDATE_CARD / EDITING_CARD', () => {
    const card = {
      a: 1,
      b: 2,
    };

    expect(
      cardReducer(
        {},
        {
          type: UPDATE_CARD,
          data: {
            card,
          },
        }
      )
    ).toEqual({
      ...card,
    });

    expect(
      cardReducer(
        {},
        {
          type: EDITING_CARD,
          data: {
            card,
          },
        }
      )
    ).toEqual({
      ...card,
    });
  });

  it('should handle SAVING_CARD / CLEAR_CARD / EDITING_CARD_SAVE', () => {
    const card = {
      a: 1,
      b: 2,
    };

    expect(
      cardReducer(
        {},
        {
          type: SAVING_CARD,
          data: {
            card,
          },
        }
      )
    ).toEqual({});

    expect(
      cardReducer(
        {},
        {
          type: CLEAR_CARD,
          data: {
            card,
          },
        }
      )
    ).toEqual({});

    expect(
      cardReducer(
        {},
        {
          type: EDITING_CARD_SAVE,
          data: {
            card,
          },
        }
      )
    ).toEqual({});
  });
});
