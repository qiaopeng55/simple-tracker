import React from 'react';
import { shallow } from 'enzyme';
import { columnsInitialState } from '../reducers/columns';
import { cardsInitialState } from '../reducers/cards';
import { Board } from './board';

const props = {
  columns: columnsInitialState,
  cards: cardsInitialState,
};

describe('Board', () => {
  const board = shallow(<Board {...props} />);

  it('renders properly', () => {
    expect(board).toMatchSnapshot();
  });

  it('renders the title', () => {
    expect(board.find('#header').text()).toEqual('Simple Issue Tracker');
  });

  it('renders correct number of columns', () => {
    expect(board.find('Connect(DropTarget(Column))').length).toEqual(
      columnsInitialState.length
    );
  });

  it('pass correct title to Column component', () => {
    board.find('Connect(DropTarget(Column))').forEach((col, index) => {
      expect(col.props().title).toEqual(columnsInitialState[index].title);
    });
  });

  it('pass cards with matching column id to Column component', () => {
    board.find('Connect(DropTarget(Column))').forEach(col => {
      col.props().cards.forEach(card => {
        expect(card.columnId).toEqual(col.props().id);
      });
    });
  });
});
