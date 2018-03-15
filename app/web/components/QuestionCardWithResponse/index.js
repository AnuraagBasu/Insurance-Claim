import React, { Component } from 'react';

import QuestionCard from '../QuestionCard';

import styles from './styles.scss';

class QuestionCardWithResponse extends Component {
	constructor( props ) {
		super( props );

		this.state = this.getInitialState();

		this.onResponseChange = this.onResponseChange.bind( this );
		this.onSubmit = this.onSubmit.bind( this );
	}

	getInitialState() {
		return {
			response: "",
			isValidToSubmit: false
		};
	}

	onResponseChange( response ) {
		// TODO: validate data here
		this.setState( {
			response,
			isValidToSubmit: true
		} );
	}

	onSubmit() {
		if ( this.state.isValidToSubmit ) {
			this.props.onSubmit( this.state.response );
		}
	}

	componentWillReceiveProps( nextProps ) {
		if ( this.props.id != nextProps.id ) {
			this.setState( this.getInitialState() );
		}
	}

	render() {
		return (
			<QuestionCard
				{...this.props}
				response={this.state.response}
				isValidToSubmit={this.state.isValidToSubmit}
				onResponseChange={this.onResponseChange}
				onSubmit={this.onSubmit} />
		);
	}
}

export default QuestionCardWithResponse;