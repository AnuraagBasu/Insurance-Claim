import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

function getStore( initialState ) {

	const loggerMiddleware = createLogger( { predicate: ( getState, actions ) => process.env.NODE_ENV == 'development' } );

	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);

	return createStore( reducer, initialState, enhancer );
}

const initialState = {
	questions: [],
	currentQuestionId: null,
	responses: [],
	currentView: 'first'
};

export default getStore( initialState );