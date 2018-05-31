import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import './main.css';
import { BoardContainer, ColumnContainer } from './styles';
import Column from './column';

const Columns = ({ columns, cards }) =>
  columns.map(column => (
    <Column
      key={column.id}
      {...column}
      cards={cards.filter(card => card.columnId === column.id)}
    />
  ));

export class Board extends Component {
  render() {
    const { columns, cards } = this.props;
    return (
      <BoardContainer>
        <div id="header">Simple Issue Tracker</div>
        <ColumnContainer>
          {Columns({
            columns,
            cards,
          })}
        </ColumnContainer>
      </BoardContainer>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns,
  cards: state.cards,
});

export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(Board));
