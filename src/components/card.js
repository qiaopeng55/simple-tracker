import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { CARD } from '../actions/constant';
import { deleteCard, editingCard, dropCardOnCard } from '../actions/index';
import { StyledCard } from './styles';
import pencilEditButton from '../assets/pencil-edit-button.svg';
import deleteButton from '../assets/delete-button.svg';

/**
 * Implements the drag source contract.
 */
const cardDragSource = {
  beginDrag(props) {
    return {
      id: props.id,
      origColumnId: props.columnId,
    };
  },
};

const cardDropTarget = {
  drop(props, monitor) {
    const cardDragged = monitor.getItem();
    if (props.id !== cardDragged.id) {
      props.dropCardOnCard(cardDragged.id, props.id);
    }
  },
};

const collectDrag = (connectDnD, monitor) => ({
  connectDragSource: connectDnD.dragSource(),
  isDragging: monitor.isDragging(),
});

const collectDrop = (connectDnD, monitor) => ({
  connectDropTarget: connectDnD.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
});

export class Card extends Component {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      id,
      text,
      columnId,
      isDragging,
      isOver,
      // eslint-disable-next-line no-shadow
      editingCard,
      // eslint-disable-next-line no-shadow
      deleteCard,
    } = this.props;
    return connectDropTarget(
      connectDragSource(
        <li>
          <StyledCard isDragging={isDragging} isOver={isOver}>
            <div className="task__title">{text}</div>
            <div
              className="action edit"
              onClick={() =>
                editingCard({
                  id,
                  text,
                  columnId,
                })
              }>
              <img src={pencilEditButton} alt="edit" />
            </div>
            <div className="action delete" onClick={() => deleteCard(id)}>
              <img src={deleteButton} alt="delete" />
            </div>
          </StyledCard>
        </li>
      )
    );
  }
}

const dragHighOrderCard = DragSource(CARD, cardDragSource, collectDrag)(Card);
const dragDropHighOrderCard = DropTarget(CARD, cardDropTarget, collectDrop)(
  dragHighOrderCard
);

export default connect(null, {
  dropCardOnCard,
  deleteCard,
  editingCard,
})(dragDropHighOrderCard);
