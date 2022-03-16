import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<header>
			<H1>Memory Card Game</H1>
		</header>
	);
}

const H1 = styled.h1`
	color: ${(props) => props.theme.text};
	text-align: center;
	margin: 0;
`;

export default Header;
