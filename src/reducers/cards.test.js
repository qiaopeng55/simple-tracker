import cardsReducer from './cards';
import {
  DROP_CARD_TO_COLUMN,
  DROP_CARD_ON_CARD,
  SAVING_CARD,
  DELETE_CARD,
  EDITING_CARD_SAVE,
} from '../actions/constant';

describe('cardsReducer', () => {
  it('should return the initial state', () => {
    expect(cardsReducer([], {})).toEqual([]);
  });

  it('should handle DROP_CARD_TO_COLUMN', () => {
    const columnId = 2;
    const cardId = 1;

    const cards = [
      {
        id: cardId,
        text: 'task 1',
        columnId: 1,
      },
      {
        id: 2,
        text: 'task 2',
        columnId: 1,
      },
    ];

    const expectedState = [...cards];
    expectedState[0].columnId = columnId;

    expect(
      cardsReducer(cards, {
        type: DROP_CARD_TO_COLUMN,
        data: {
          columnId,
          cardId,
        },
      })
    ).toEqual(expectedState);
  });

  it('should handle DROP_CARD_ON_CARD', () => {
    const cardId = 1;
    const targetCardId = 3;

    const cards = [
      {
        id: cardId,
        text: 'task 1',
        columnId: 1,
      },
      {
        id: 2,
        text: 'task 2',
        columnId: 1,
      },
      {
        id: targetCardId,
        text: 'task 3',
        columnId: 1,
      },
    ];

    const expectedState = [cards[2], cards[1], cards[0]];

    expect(
      cardsReducer(cards, {
        type: DROP_CARD_ON_CARD,
        data: {
          cardId,
          targetCardId,
        },
      })
    ).toEqual(expectedState);
  });

  it('should handle SAVING_CARD', () => {
    const card = 3;
    const state = [1, 2];

    const expectedState = [...state, card];

    expect(
      cardsReducer(state, {
        type: SAVING_CARD,
        data: {
          card,
        },
      })
    ).toEqual(expectedState);
  });

  it('should handle DELETE_CARD', () => {
    const cardId = 2;
    const state = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const expectedState = [
      {
        id: 1,
      },
    ];

    expect(
      cardsReducer(state, {
        type: DELETE_CARD,
        data: {
          cardId,
        },
      })
    ).toEqual(expectedState);
  });

  it('should handle EDITING_CARD_SAVE', () => {
    const card = {
      id: 1,
      text: 'new text',
    };
    const state = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const expectedState = [card, state[1]];

    expect(
      cardsReducer(state, {
        type: EDITING_CARD_SAVE,
        data: {
          card,
        },
      })
    ).toEqual(expectedState);
  });
});
