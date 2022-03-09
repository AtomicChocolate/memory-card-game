import React from 'react'
import { Score } from "../App";

type Props = {
	score: Score,
	updateScore: (newScore: number) => void;
}

// A function to generate multiple cards, pulling from the image folder.
// Other stuff for game

const Deck = (props: Props) => {
  return (
	<div>Deck</div>
  )
}

export default Deck