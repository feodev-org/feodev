import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { CssBaseline } from "@mui/material";
import "@fontsource/fira-code";
import "@fontsource/medievalsharp";
import "./app.css";
import "./i18n";

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline/>
		<App/>
	</React.StrictMode>,
	document.getElementById("root")
);
