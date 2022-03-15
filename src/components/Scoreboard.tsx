import React from "react";
import { Score } from "../utils/Types";

type Props = {
	score: Score;
};

const Scoreboard = (props: Props) => {
	return (
		<nav className="scoreboard">
			<p>Score: {props.score.score}-</p>
			<p>-Top: {props.score.highScore}</p>
		</nav>
	);
};

export default Scoreboard;
