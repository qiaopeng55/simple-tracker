import React from 'react';
import { CardFormContainer } from './styles';
import deleteButton from '../assets/delete-button.svg';

const actionConfig = props => {
  const { operation } = props.app;

  if (operation === 'ADDING_CARD') {
    return {
      buttonText: 'Add',
      submitAction: props.savingCard,
    };
  }

  if (operation === 'EDITING_CARD') {
    return {
      buttonText: 'Save',
      submitAction: props.editingCardSave,
    };
  }

  return {};
};

const CardForm = props => {
  const { buttonText, submitAction } = actionConfig(props);
  return (
    <CardFormContainer>
      <textarea
        autoFocus
        name="text"
        value={props.card.text}
        onChange={e => {
          props.updateCard({
            ...props.card,
            text: e.target.value,
          });
        }}
      />

      <div className="actions">
        <input
          type="submit"
          value={buttonText}
          onClick={() => {
            const { text } = props.card;
            // only allow save the card if we have non empty text input
            if (text && text.trim()) submitAction(props.card);
          }}
        />
        <div className="cancel" onClick={props.clearCard}>
          <img src={deleteButton} alt="deleteButton" />
        </div>
      </div>
    </CardFormContainer>
  );
};

export default CardForm;
