import React from "react";
import styled from "styled-components";
import { CardImage } from "../utils/Types";

type Props = {
	data: CardImage;
	onClick: () => void;
};

const Card = (props: Props) => {
	return (
		<Button onClick={props.onClick}>
			<Img src={props.data.url} alt={props.data.name} />
			<P>{props.data.name}</P>
		</Button>
	);
};

const Button = styled.button`
	outline-style: solid;
	outline-color: gray;
	margin: 0;
	background-color: ${(props) => props.theme.navButtonBackground};
`;

const Img = styled.img`
	image-rendering: pixelated;
	height: 25%;
	width: auto;
`;

const P = styled.p`
	text-align: center;
	color: ${(props) => props.theme.text};
`;

export default Card;
