import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Deck from "./components/Deck";

function App() {
	const [scoreData, setScore] = useState({
		score: 0,
		highScore: 0,
	});

	function updateScore(newScore: number): void {
		setScore({
			score: newScore,
			highScore:
				newScore > scoreData.highScore ? newScore : scoreData.highScore,
		});
	}

	return (
		<div className="App">
			<Header />
			<Scoreboard score={scoreData} />

			<Deck scoreData={scoreData} updateScore={updateScore} />

			<Footer />
		</div>
	);
}

export default App;
