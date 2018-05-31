import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import {
  dropCardToColumn,
  addingCard,
  updateCard,
  savingCard,
  clearCard,
  editingCardSave,
} from '../actions';
import Card from './card';

import { CARD } from '../actions/constant';
import CardForm from './card-form';

const columnTarget = {
  drop(props, monitor) {
    const cardDragged = monitor.getItem();
    props.dropCardToColumn(cardDragged.id, props.id);
  },
};

// eslint-disable-next-line no-unused-vars
function collect(connectDnD, monitor) {
  return {
    connectDropTarget: connectDnD.dropTarget(),
  };
}

const Cards = props =>
  props.cards.map(card => {
    const { id, card: cardInEditing } = props;

    if (card.id === cardInEditing.id) {
      return <CardForm key={card.id} {...props} />;
    }
    return <Card key={card.id} {...card} columnId={id} />;
  });

export const Column = props => {
  const { connectDropTarget, id, title } = props;

  return connectDropTarget(
    <div className="column">
      <div className="column__header">{title}</div>
      <ul className="cardContainer">{Cards(props)}</ul>
      {/* only open CardForm on bottom of the screen if
      cardId match column id & appState indicate we are
      adding a new card */}
      {props.card.columnId === id && props.app.operation === 'ADDING_CARD' ? (
        <CardForm {...props} />
      ) : (
        <a className="column__footer" onClick={() => props.addingCard(id)}>
          Add a card...
        </a>
      )}
    </div>
  );
};

// add custom display name to facilitate
// jest testing
Column.displayName = 'Column';

const mapStateToProps = state => ({
  card: state.card,
  app: state.app,
});

export default connect(mapStateToProps, {
  dropCardToColumn,
  addingCard,
  updateCard,
  savingCard,
  clearCard,
  editingCardSave,
})(DropTarget(CARD, columnTarget, collect)(Column));
