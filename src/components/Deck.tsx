import React, { useState } from "react";
import styled from "styled-components";
import Shuffle from "shuffle-array";
import uniqid from "uniqid";
import { images } from "../utils/Images";
import { CardImage, Score } from "../utils/Types";
import Card from "./Card";

type Props = {
	scoreData: Score;
	updateScore: (newScore: number) => void;
	deckLength: number;
};

let cards = [...images];
Shuffle(cards);

const Deck = (props: Props) => {
	const [deckOrder, updateDeckOrder] = useState(cards);
	const [picks, updatePicks] = useState([] as CardImage[]);

	function ButtonClick(cardData: CardImage): void {
		if (picks.find((pick) => pick.name === cardData.name)) {
			//Game over - player picked a card they previously picked
			props.updateScore(0);
			updatePicks([]);
		} else {
			props.updateScore(props.scoreData.score + 1);
			updatePicks([...picks, cardData]);
		}

		//Reshuffle deck
		let newDeckOrder = [...deckOrder.slice(0, props.deckLength)];
		Shuffle(newDeckOrder);
		newDeckOrder = [...newDeckOrder, ...deckOrder.slice(props.deckLength, 212)];
		updateDeckOrder(newDeckOrder);
	}

	return (
		<Div>
			{deckOrder.slice(0, props.deckLength).map((cardData) => (
				<Card
					data={cardData}
					onClick={() => ButtonClick(cardData)}
					key={uniqid()}
				/>
			))}
		</Div>
	);
};

const Div = styled.div`
	display: grid;
	height: 80vh;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;

	max-height: 80%;
	overflow-y: auto;

	@media (max-width: 1000px) {
		height: 60vh;
	}
`;

export default Deck;
