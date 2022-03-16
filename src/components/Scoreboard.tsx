import React from "react";
import styled from "styled-components";
import { Score } from "../utils/Types";

type Props = {
	score: Score;
};

const Scoreboard = (props: Props) => {
	return (
		<Nav className="scoreboard">
			<NavItem>Score: {props.score.score}</NavItem>
			<NavItem>Top: {props.score.highScore}</NavItem>
		</Nav>
	);
};

const Nav = styled.nav`
	background-color: ${(props) => props.theme.navBackground};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavItem = styled.p`
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.navButtonBackground};
	margin: 0 10px;
	padding: 0.5em;
	border-radius: 3px;

	@media (max-width: 1000px) {
		margin: 0 0.25em;
		padding: 0.2em;
	}
`;

export default Scoreboard;
