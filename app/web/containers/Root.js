import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _find from 'lodash.find';

import { ActionCreators } from "../../core/actions";

import Questionnaire from './Questionnaire';
import ClaimSubmission from './ClaimSubmission';

import styles from '../styles/base.scss';

class Root extends Component {
	constructor( props ) {
		super( props );
	}

	componentWillMount() {
		this.props.getQuestions();
	}

	render() {
		switch ( this.props.currentView ) {
			case 'first':
				return ( <Questionnaire /> );

			case 'last':
				return ( <ClaimSubmission /> );
		}
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		currentView: state.currentView
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );
