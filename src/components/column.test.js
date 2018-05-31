import React from 'react';
import { shallow } from 'enzyme';
import Column from './column';

describe('Column', () => {
  const mockAddingCard = jest.fn();
  const columnId = 1;
  const props = {
    id: columnId,
    title: 'todo',
    cards: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ],
    card: {},
    addingCard: mockAddingCard,
    app: {},
  };

  // Obtain the reference to the component before React DnD wrapping
  const OriginalColumn = Column.DecoratedComponent;

  // Stub the React DnD connector functions with an identity function
  const identity = el => el;

  // Render with one set of props and test
  const column = shallow(
    <OriginalColumn {...props} connectDropTarget={identity} />
  );

  it('renders properly', () => {
    expect(column).toMatchSnapshot();
  });

  it('renders the correct column title', () => {
    expect(column.find('.column .column__header').text()).toEqual(props.title);
  });

  it('renders correct numbers of cards', () => {
    expect(column.find('Connect(DropTarget(DragSource(Card)))').length).toEqual(
      props.cards.length
    );
  });

  describe('when clicking the `Add a card...` link', () => {
    beforeEach(() => {
      column.find('a.column__footer').simulate('click');
    });

    it('calls the addingCard callback with columnId', () => {
      expect(mockAddingCard).toHaveBeenCalledWith(columnId);
    });
  });

  describe('when column card property id(card in editing) match cardId', () => {
    const props2 = {
      ...props,
    };
    props2.card = {
      id: props.cards[0].id,
      columnId,
    };

    const column2 = shallow(
      <OriginalColumn {...props2} connectDropTarget={identity} />
    );

    it('renders CardForm', () => {
      expect(column2.find('CardForm').exists()).toEqual(true);
    });

    it('renders correct number of CardForm and Card', () => {
      const numberOfCardForms = column2.find('CardForm').length;
      const numberOfCards = column2.find(
        'Connect(DropTarget(DragSource(Card)))'
      ).length;

      expect(numberOfCardForms + numberOfCards).toEqual(props2.cards.length);
    });

    describe('app operation mode is `ADDING_CARD`', () => {
      const props3 = {
        ...props2,
      };
      props3.cards = [];
      props3.app = {
        operation: 'ADDING_CARD',
      };

      const column3 = shallow(
        <OriginalColumn {...props3} connectDropTarget={identity} />
      );

      it('renders CardForm', () => {
        expect(column3.find('CardForm').exists()).toEqual(true);
      });

      it('hide `Add a card...` link', () => {
        expect(column3.find('a.column__footer').exists()).toEqual(false);
      });
    });
  });
});
