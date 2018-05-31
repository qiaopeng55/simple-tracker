import React from 'react';
import { shallow } from 'enzyme';
import CardForm from './card-form';

describe('CardForm', () => {
  const mockUpdateCard = jest.fn();
  const mockSavingCard = jest.fn();
  const mockClearCard = jest.fn();
  const mockEditingCardSave = jest.fn();

  const props = {
    card: {
      id: 7,
      text: 'task 7',
      columnId: 2,
    },
    app: {
      operation: 'EDITING_CARD',
    },
    updateCard: mockUpdateCard,
    savingCard: mockSavingCard,
    clearCard: mockClearCard,
    editingCardSave: mockEditingCardSave,
  };

  const cardForm = shallow(<CardForm {...props} />);

  it('renders properly', () => {
    expect(cardForm).toMatchSnapshot();
  });

  it('pass correct value to textarea', () => {
    expect(cardForm.find('textarea').props().value).toEqual(props.card.text);
  });

  describe('when typing into the textarea', () => {
    const newContent = 'task edited';

    beforeEach(() => {
      cardForm.find('textarea').simulate('change', {
        target: {
          value: newContent,
        },
      });
    });

    it('calls the updateCard callback with updated card value', () => {
      expect(mockUpdateCard).toHaveBeenCalledWith({
        ...props.card,
        text: newContent,
      });
    });
  });

  it('renders submit button', () => {
    expect(cardForm.find('input[type="submit"]').exists()).toEqual(true);
  });

  describe('when click submit button', () => {
    describe('when app operation mode === EDITING_CARD', () => {
      it('renders `Save` as button text', () => {
        expect(cardForm.find('input[type="submit"]').props().value).toEqual(
          'Save'
        );
      });

      describe('when card text is not empty', () => {
        beforeEach(() => {
          cardForm.find('input[type="submit"]').simulate('click');
        });

        it('calls the clearCard callback', () => {
          expect(mockEditingCardSave).toHaveBeenCalled();
        });
      });

      describe('when card text is empty', () => {
        const mockEditingCardSave2 = jest.fn();

        const props2 = {
          card: {},
          app: {
            operation: 'EDITING_CARD',
          },
          editingCardSave: mockEditingCardSave2,
        };

        const cardForm2 = shallow(<CardForm {...props2} />);

        beforeEach(() => {
          cardForm2.find('input[type="submit"]').simulate('click');
        });

        it('does not call the clearCard callback', () => {
          expect(mockEditingCardSave2).not.toHaveBeenCalled();
        });
      });
    });

    describe('when app operation mode === ADDING_CARD', () => {
      describe('when card text is not empty', () => {
        const savingCard = jest.fn();

        const props3 = {
          card: {
            text: 'not empty',
          },
          app: {
            operation: 'ADDING_CARD',
          },
          savingCard,
        };

        const cardForm3 = shallow(<CardForm {...props3} />);

        beforeEach(() => {
          cardForm3.find('input[type="submit"]').simulate('click');
        });

        it('renders `Add` as button text', () => {
          expect(cardForm3.find('input[type="submit"]').props().value).toEqual(
            'Add'
          );
        });

        it('calls the savingCard callback', () => {
          expect(savingCard).toHaveBeenCalled();
        });
      });

      describe('when card text is empty', () => {
        const savingCard = jest.fn();

        const props4 = {
          card: {
            text: '',
          },
          app: {
            operation: 'ADDING_CARD',
          },
          savingCard,
        };

        const cardForm4 = shallow(<CardForm {...props4} />);

        beforeEach(() => {
          cardForm4.find('input[type="submit"]').simulate('click');
        });

        it('does not call the clearCard callback', () => {
          expect(savingCard).not.toHaveBeenCalled();
        });
      });
    });
  });

  it('renders cancel button', () => {
    expect(cardForm.find('.cancel').exists()).toEqual(true);
  });

  describe('when click cancel', () => {
    beforeEach(() => {
      cardForm.find('.cancel').simulate('click');
    });

    it('calls the clearCard callback', () => {
      expect(mockClearCard).toHaveBeenCalled();
    });
  });
});
