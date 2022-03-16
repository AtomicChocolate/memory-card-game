import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Colors from "./styles/Theme";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Colors}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
