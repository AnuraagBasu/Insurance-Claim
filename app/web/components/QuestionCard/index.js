import React from 'react';

import { StringInput, NumberInput, BooleanInput, DateInput } from '../InputControls';
import styles from './styles.scss';

const getAnswer = props => {
	switch ( props.answerType ) {
		case 'string':
			return (
				<StringInput id={props.id}
					value={props.response}
					onChange={props.onResponseChange} />
			);

		case 'number':
			return (
				<NumberInput id={props.id}
					value={props.response}
					onChange={props.onResponseChange} />
			);

		case 'boolean':
			return (
				<BooleanInput id={props.id}
					value={props.response}
					inputs={[ "Yes", "No" ]}
					onChange={props.onResponseChange} />
			);

		case 'date':
			return (
				<DateInput id={props.id}
					value={props.response}
					onChange={props.onResponseChange} />
			);
	}
};

const QuestionCard = props => {
	let classListForSubmitBtn = [ "submitBtn" ];
	if ( !props.isValidToSubmit ) {
		classListForSubmitBtn.push( "disabled" );
	}

	return (
		<div data-id={props.id} className="card questionCard">
			<div className="question required">{props.questionText}</div>

			<div className="answer">
				{getAnswer( props )}
			</div>

			<div className="footer">
				<span className={classListForSubmitBtn.join( " " )} onClick={props.onSubmit}>{props.submitText}</span>
			</div>
		</div>
	);
};

export default QuestionCard;