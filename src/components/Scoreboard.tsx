import React from 'react'
import { Score } from "../App"

type Props = {
	score: Score
}

const Scoreboard = (props: Props) => {
  return (
	<div className="scoreboard"><p>Score: {props.score.score}</p><p>Top: {props.score.highScore}</p></div>
  )
}

export default Scoreboard