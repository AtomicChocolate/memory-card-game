import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Score } from "../utils/Types";
import MaxCards from "./MaxCards";

type Props = {
	score: Score;
	deckLength: number;
	setDeckLength: (number) => void;
};

type NavItemProps = {
	score: number;
};

const Scoreboard = (props: Props) => {
	return (
		<Nav>
			<NavItem score={props.score.highScore !== 0 ? props.score.score : 1}>
				Score: {props.score.score}
			</NavItem>
			<NavItem score={props.score.highScore !== 0 ? props.score.highScore : 1}>
				Top: {props.score.highScore}/
				<MaxCards
					deckLength={props.deckLength}
					setDeckLength={props.setDeckLength}
				/>
			</NavItem>
		</Nav>
	);
};

const increaseAnimation = keyframes`
	100% {background-color: green; animation-name: 0}
`;

const decreaseAnimation = keyframes`
	100% {background-color: red}
`;

const Nav = styled.nav`
	background-color: ${(props) => props.theme.navBackground};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavItem = styled.p<NavItemProps>`
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.navButtonBackground};
	margin: 0 10px;
	padding: 0.5em;
	border-radius: 3px;

	animation-name: ${(props) =>
		props.score === 0 ? decreaseAnimation : increaseAnimation};
	animation-duration: 0.5s;
	animation-iteration-count: 2;
	animation-direction: alternate;

	@media (max-width: 1000px) {
		margin: 0 0.25em;
		padding: 0.2em;
	}
`;

export default Scoreboard;
