import React from "react";
import Shuffle from "shuffle-array";
import { images } from "../utils/Images";
import { CardImage, Score } from "../utils/Types";
import Card from "./Card";

type Props = {
	score: Score;
	updateScore: (newScore: number) => void;
};

const Deck = (props: Props) => {
	const picks = Shuffle.pick(images, { picks: 12 }) as CardImage[];

	return (
		<div className="card-deck">
			{picks.map((image) => (
				<Card image={image} />
			))}
		</div>
	);
};

export default Deck;
