import React from "react";
import styled from "styled-components";

type Props = {
	deckLength: number;
	setDeckLength: (arg0: number) => void;
};

const MaxCards = (props: Props) => {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		props.setDeckLength(parseInt(event.currentTarget.value));
	}
	return (
		<NumInput
			type="number"
			value={props.deckLength}
			onChange={handleChange}
			min="2"
			max="212"
		></NumInput>
	);
};

const NumInput = styled.input`
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
	font-family: inherit;
	width: 6ch;
	border: none;
	border-radius: 3px;
	border-radius: inherit;
`;

export default MaxCards;
