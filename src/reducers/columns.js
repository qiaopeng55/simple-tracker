/**
 *  columns reducer
 */

export const columnsInitialState = [
  {
    id: 1,
    title: 'todo',
  },
  {
    id: 2,
    title: 'in progress',
  },
  {
    id: 3,
    title: 'done',
  },
];

function columns(state = columnsInitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default columns;
