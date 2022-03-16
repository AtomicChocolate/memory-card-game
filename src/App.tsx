import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Deck from "./components/Deck";
import styled from "styled-components";

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
		<Main>
			<Header />
			<Scoreboard score={scoreData} />

			<Deck scoreData={scoreData} updateScore={updateScore} />

			<Footer />
		</Main>
	);
}

const Main = styled.main`
	padding: 1em;
	background-color: ${(props) => props.theme.navBackground};
`;

export default App;
