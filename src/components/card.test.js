import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './card';

describe('Card', () => {
  const mockDeleteCard = jest.fn();
  const mockEditingCard = jest.fn();

  const props = {
    id: 1,
    text: 'task 1',
    columnId: 1,
    deleteCard: mockDeleteCard,
    editingCard: mockEditingCard,
  };

  // Stub the React DnD connector functions with an identity function
  const identity = el => el;

  // Render with one set of props and test
  const card = shallow(
    <Card
      {...props}
      connectDragSource={identity}
      connectDropTarget={identity}
    />
  );

  it('renders properly', () => {
    expect(card).toMatchSnapshot();
  });

  it('renders task description properly', () => {
    expect(card.find('.task__title').text()).toEqual(props.text);
  });

  it('renders edit button', () => {
    expect(card.find('.action .edit').exists()).toEqual(true);
  });

  describe('when click edit button', () => {
    beforeEach(() => {
      card.find('.action .edit').simulate('click');
    });

    it('calls the editingCard callback with {id, text & columnId}', () => {
      const { id, text, columnId } = props;
      expect(mockEditingCard).toHaveBeenCalledWith({
        id,
        text,
        columnId,
      });
    });
  });

  it('renders delete button', () => {
    expect(card.find('.action .delete').exists()).toEqual(true);
  });

  describe('when click delete button', () => {
    beforeEach(() => {
      card.find('.action .delete').simulate('click');
    });

    it('calls the deleteCard callback with id', () => {
      const { id } = props;
      expect(mockDeleteCard).toHaveBeenCalledWith(id);
    });
  });
});
