import * as constants from './constant';
import * as actions from './index';

it('creates an action to dropCardToColumn', () => {
  const [cardId, columnId] = [1, 1];

  const expectedAction = {
    type: constants.DROP_CARD_TO_COLUMN,
    data: {
      cardId,
      columnId,
    },
  };

  expect(actions.dropCardToColumn(cardId, columnId)).toEqual(expectedAction);
});

it('creates an action to dropCardOnCard', () => {
  const [cardId, targetCardId] = [1, 2];

  const expectedAction = {
    type: constants.DROP_CARD_ON_CARD,
    data: {
      cardId,
      targetCardId,
    },
  };

  expect(actions.dropCardOnCard(cardId, targetCardId)).toEqual(expectedAction);
});

it('creates an action to addingCard', () => {
  const columnId = 1;

  const expectedAction = {
    type: constants.ADDING_CARD,
    data: {
      columnId,
    },
  };

  expect(actions.addingCard(columnId)).toEqual(expectedAction);
});

it('creates an action to updateCard', () => {
  const card = 1;

  const expectedAction = {
    type: constants.UPDATE_CARD,
    data: {
      card,
    },
  };

  expect(actions.updateCard(card)).toEqual(expectedAction);
});

it('creates an action to savingCard', () => {
  const card = 1;

  const expectedAction = {
    type: constants.SAVING_CARD,
    data: {
      card,
    },
  };

  expect(actions.savingCard(card)).toEqual(expectedAction);
});

it('creates an action to deleteCard', () => {
  const cardId = 1;

  const expectedAction = {
    type: constants.DELETE_CARD,
    data: {
      cardId,
    },
  };

  expect(actions.deleteCard(cardId)).toEqual(expectedAction);
});

it('creates an action to clearCard', () => {
  const expectedAction = {
    type: constants.CLEAR_CARD,
  };

  expect(actions.clearCard()).toEqual(expectedAction);
});

it('creates an action to editingCard', () => {
  const card = 1;

  const expectedAction = {
    type: constants.EDITING_CARD,
    data: {
      card,
    },
  };

  expect(actions.editingCard(card)).toEqual(expectedAction);
});

it('creates an action for editingCardSave', () => {
  const card = 1;

  const expectedAction = {
    type: constants.EDITING_CARD_SAVE,
    data: {
      card,
    },
  };

  expect(actions.editingCardSave(card)).toEqual(expectedAction);
});
