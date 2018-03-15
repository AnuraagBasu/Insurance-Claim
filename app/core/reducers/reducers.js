import createReducer from "./createReducer";
import * as types from "../actions/types";

export const currentView = createReducer( {}, {
	[ types.CHANGE_CURRENT_VIEW ]( state, action ) {
		return action.payload.currentView;
	}
} );

export const questions = createReducer( {}, {
	[ types.SET_QUESTIONS ]( state, action ) {
		return action.payload.questions;
	}
} );

export const currentQuestionId = createReducer( {}, {
	[ types.SET_CURRENT_QUESTION_ID ]( state, action ) {
		return action.payload.questionId;
	}
} );

export const responses = createReducer( {}, {
	[ types.ADD_RESPONSE ]( state, action ) {
		let newState = [ ...state ];
		newState.push( action.payload.response );

		return newState;
	}
} );