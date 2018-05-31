import styled from 'styled-components';

const theme = {
  padding: '10px',
  columnWidth: '300px',
  colors: {
    cardDragHover: '#faffbc',
    columnBackground: '#e2e4e6',
    columnHeader: '#333333',
    submitBtnBg: '#5aac44',
    submitBtnShadow: '#519839',
    submitBtnBgHover: '#519839',
  },
};

export const CardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.padding};
  margin-bottom: ${theme.padding};

  textarea[name='text'] {
    &:focus {
      outline-width: 0;
    }
    padding: ${theme.padding};
    overflow: hidden;
    word-wrap: break-word;
    height: 54px;
    border: none;
    box-shadow: none;
    margin-bottom: 4px;
    max-height: 162px;
    min-height: 54px;
    transition: background 85ms ease-in, border-color 85ms ease-in;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    display: block;
    flex-direction: column;
    resize: auto;
    cursor: text;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
  }

  .cancel {
    position: absolute;
    left: 35%;
    top: 17px;
    cursor: pointer;
    img {
      width: 15px;
      height: 15px;
      color: grey;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    position: relative;
  }

  input[type='submit'] {
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    line-height: 22px;
    margin: 8px 4px 0 0;
    width: 30%;
    border-radius: 5px;

    min-height: 32px;
    padding: 4px 16px;
    vertical-align: top;

    background: ${theme.colors.submitBtnBg};
    box-shadow: 0 1px 0 ${theme.colors.submitBtnShadow};
    color: #fff;
    transition: background 0.3s ease;

    &:hover {
      background: ${theme.colors.submitBtnBgHover} 100%;
    }
  }
`;

export const BoardContainer = styled.div`
  font-family: Roboto, Arial, sans-serif;
  padding: ${theme.padding};

  #header {
    color: white;
    font-size: 1.5rem;
    padding-top: ${theme.padding};
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  align-items: flex-start;

  &::after {
    content: '';
    min-width: 5px;
  }

  .column {
    margin-right: ${theme.padding};
    margin-top: ${theme.padding};
    flex: 0 1 ${theme.columnWidth};
    min-width: ${theme.columnWidth};
    width: ${theme.columnWidth};
    background: ${theme.colors.columnBackground};
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    > * {
      padding: 0 ${theme.padding};
    }

    .column__header {
      margin: ${theme.padding} 0;
      color: ${theme.colors.columnHeader};
      text-transform: uppercase;
    }

    .cardContainer {
      list-style: none;

      max-height: calc(100vh - 200px);
      overflow-y: auto;

      li {
        padding: ${theme.padding};
        font-size: 14px;
        background: white;
        border-radius: 5px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        &:not(:last-child) {
          margin-bottom: ${theme.padding};
        }

        .action {
          cursor: pointer;
          visibility: hidden;
          padding: 5px;
          margin: -5px;
          position: absolute;
          border-radius: 3px;
          top: 0;
          right: 0;

          img {
            width: 14px;
            height: 14px;
          }
        }

        .action.edit {
          right: 28px;
        }

        &:hover {
          background: #edeff0;

          .action {
            visibility: visible;

            &:hover {
              color: grey;
              background: silver;
            }
          }
        }
      }
    }

    .column__footer {
      padding: 8px ${theme.padding};
      font-size: 14px;
      color: #838c91;
      border-radius: 0px 0px 5px 5px;
      margin-top: 6px;

      &:hover {
        text-decoration: underline;
        background: #cdd2d4;
        color: #4d4d4d;
        cursor: pointer;
      }
    }
  }
`;

const hoverStyle = `background: ${theme.colors.cardDragHover};
    border-radius: 5px;
    margin: -${theme.padding};
    padding: ${theme.padding};`;

export const StyledCard = styled.div`
  display: flex;
  position: relative;
  word-break: break-word;
  cursor: grab;
  opacity: ${props => (props.isDragging ? 0 : 1)};
  ${props => props.isOver && hoverStyle};
`;
