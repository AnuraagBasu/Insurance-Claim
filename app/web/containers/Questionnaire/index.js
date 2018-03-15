import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _find from 'lodash.find';

import { ActionCreators } from '../../../core/actions';

import QuestionCardWithResponse from '../../components/QuestionCardWithResponse';

import styles from './styles.scss';

class Questionnaire extends Component {
	constructor( props ) {
		super( props );

		this.onSubmitQuestion = this.onSubmitQuestion.bind( this );
	}

	onSubmitQuestion( reply ) {
		this.props.submitResponse( Object.assign( {}, this.props.currentQuestion, { reply } ) );
	}

	render() {
		let submitText = "Next";
		if ( !this.props.currentQuestion.next ) {
			submitText = "Submit";
		}

		return (
			<div className="page questionsPage">
				<div className="animated fadeIn title">Answer the questionnaire to claim your insurance</div>
				<div key={"question-" + this.props.currentQuestion.id} className="animated bounceInUp questionContainer">
					<QuestionCardWithResponse
						id={this.props.currentQuestion.id}
						questionText={this.props.currentQuestion.text}
						answerType={this.props.currentQuestion.type}
						submitText={submitText}
						onSubmit={this.onSubmitQuestion} />
				</div>
			</div>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		currentQuestion: _find( state.questions, { "id": state.currentQuestionId } ),
		currentQuestionId: state.currentQuestionId
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Questionnaire );