import React from "react";

import styles from "./styles.scss";

const allowOnlyNumbers = event => {
	if ( event.which != 8 && isNaN( String.fromCharCode( event.which ) ) ) {
		event.preventDefault();
	}
};

const allowFormattedDate = event => {
	// allow only numbers and forward-slash
	if ( event.which != 191 ) {
		allowOnlyNumbers( event );
	}
};

const onInputChange = props => event => {
	props.onChange( event.target.value );
};

const onBooleanInputChange = props => index => {
	props.onChange( props.inputs[ index ] );
};

export const DateInput = props => {
	return (
		<div className="inputControl">
			<input type="text"
				maxLength={10}
				placeholder="mm/dd/yyyy"
				className="dateInput"
				value={props.value}
				onKeyDown={allowFormattedDate}
				onChange={onInputChange( props )} />
		</div>
	)
};

export const StringInput = props => {
	return (
		<div className="inputControl">
			<input type="text" className="stringInput"
				value={props.value}
				onChange={onInputChange( props )} />
		</div>
	);
};

export const NumberInput = props => {
	return (
		<div className="inputControl">
			<input type="text" className="numberInput"
				value={props.value}
				onKeyDown={allowOnlyNumbers}
				onChange={onInputChange( props )} />
		</div>
	);
}

export const BooleanInput = props => {
	return (
		<div className="inputControl">
			{props.inputs.map( ( input, index ) => {
				let classList = [ "boolInput" ];
				if ( ( props.value != "" ) && ( props.value == index ) ) {
					classList.push( "selected" );
				}

				return (
					<div key={"boolInput-" + index}
						className={classList.join( " " )}
						onClick={onBooleanInputChange( props ).bind( undefined, index )}>

						{input}

					</div>
				);
			} )}
		</div>
	);
}