import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ActionCreators } from '../../../core/actions';

import QuestionResponse from '../../components/QuestionResponse';

import styles from './styles.scss';

class ClaimSubmission extends Component {
	constructor( props ) {
		super( props );
	}

	getResponses() {
		return this.props.responses.map( ( response, index ) => {
			let animationDelay = index * 100;

			return (
				<div key={"response-" + response.id} className="responseContainer animated bounceInUp"
					style={{
						animationDelay: animationDelay + "ms"
					}}>
					<QuestionResponse
						questionText={response.text}
						response={response.reply} />
				</div>
			);
		} );
	}

	render() {
		return (
			<div className="page claimPage">
				<div className="animated fadeIn title">Claim Submission</div>

				<div className="responses">
					{this.getResponses()}
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
		responses: state.responses
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( ClaimSubmission );