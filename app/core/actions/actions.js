import * as types from './types';

function setQuestions( questions ) {
	return {
		type: types.SET_QUESTIONS,
		payload: {
			questions
		}
	};
}

function setCurrentQuestionId( questionId ) {
	return {
		type: types.SET_CURRENT_QUESTION_ID,
		payload: {
			questionId
		}
	};
}

function addResponse( response ) {
	return {
		type: types.ADD_RESPONSE,
		payload: {
			response
		}
	};
}

function changeCurrentView( viewToBe ) {
	return {
		type: types.CHANGE_CURRENT_VIEW,
		payload: {
			currentView: viewToBe
		}
	};
}

export function getQuestions() {
	return ( dispatch ) => {
		let questions = [
			{
				"id": "A01",
				"text": "What happened to your product?",
				"reply": "",
				"type": "string",
				"next": "A02"
			},
			{
				"id": "A02",
				"text": "When did the incident occur?",
				"reply": "",
				"type": "date",
				"next": "A04"
			},
			{
				"id": "A03",
				"text": "When was your last claim submission?",
				"reply": "",
				"type": "date",
				"next": "A04"
			},
			{
				"id": "A04",
				"text": "When did you purchase your product?",
				"reply": "",
				"type": "date",
				"next": "A05"
			},
			{
				"id": "A05",
				"text": "How much did your product cost?",
				"reply": "",
				"type": "number",
				"next": "A06"
			},
			{
				"id": "A06",
				"text": "Are you insured elsewhere?",
				"reply": "",
				"type": "boolean",
				"next": "B01"
			},
			{
				"id": "A07",
				"text": "Name of additional insurance?",
				"reply": "",
				"type": "string",
				"next": null
			},
			{
				"id": "B01",
				"text": "Was a police report filed?",
				"reply": "",
				"type": "boolean",
				"next": "C01"
			},
			{
				"id": "C01",
				"text": "Please provide us with your full name?",
				"reply": "",
				"type": "string",
				"next": "C02"
			},
			{
				"id": "C02",
				"text": "Please provide us with a contact number?",
				"reply": "",
				"type": "string",
				"next": "C03"
			},
			{
				"id": "C03",
				"text": "Please provide us with a contact email address?",
				"reply": "",
				"type": "string",
				"next": null
			},
			{
				"id": "C04",
				"text": "Please provide us with your date of birth?",
				"reply": "",
				"type": "date",
				"next": null
			}
		];

		dispatch( setQuestions( questions ) );

		dispatch( setCurrentQuestionId( questions[ 0 ].id ) );
	};
}

export function submitResponse( response ) {
	return ( dispatch ) => {
		dispatch( addResponse( response ) );

		if ( response.next ) {
			dispatch( setCurrentQuestionId( response.next ) );
		} else {
			dispatch( changeCurrentView( 'last' ) );
		}
	};
}