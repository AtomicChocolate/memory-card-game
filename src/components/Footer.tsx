import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<FooterStyled>
			<NavItem href="https://github.com/AtomicChocolate">GitHub</NavItem>
		</FooterStyled>
	);
}

const FooterStyled = styled.footer`
	background-color: ${(props) => props.theme.navBackground};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavItem = styled.a`
	color: ${(props) => props.theme.link};
	background-color: ${(props) => props.theme.navButtonBackground};
	text-decoration: none;
	margin-top: 1.25em;
	margin-right: 10px;
	padding: 1em;
	border-radius: 3px;

	@media (max-width: 1000px) {
		margin: 0 0.25em;
		padding: 0.2em;
	}
`;

export default Footer;
