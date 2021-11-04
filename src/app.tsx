import { ThemeProvider } from "@mui/material";
import LandingPage from "./landing-page";
import { ColorModeContext, useTheme } from "./theme";

function App() {
	const { colorMode, theme } = useTheme();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<LandingPage/>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
