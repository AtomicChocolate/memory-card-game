import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Deck from "./components/Deck";

function App() {
	const [score, setScore] = useState({
		score: 0,
		highScore: 0,
	});

	function updateScore(newScore: number): void {
		console.log("update score", newScore);
		setScore({ score: newScore, highScore: score.highScore });
	}

	return (
		<div className="App">
			<Header />
			<Scoreboard score={score} />

			<Deck score={score} updateScore={updateScore} />

			<Footer />
		</div>
	);
}

export default App;
