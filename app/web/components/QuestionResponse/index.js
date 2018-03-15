import React from 'react';

import styles from './styles.scss';

const QuestionResponse = ( props ) => {
	return (
		<div className="card responseCard">
			<div className="question">{props.questionText}</div>
			<div className="response">{props.response}</div>
		</div>
	);
};

export default QuestionResponse;