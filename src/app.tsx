import { Box, StyledEngineProvider, ThemeProvider } from "@mui/material";
import LandingPage from "./landing-page";
import { ColorModeContext, useTheme } from "./hooks/use-theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
	const { background, colorMode, theme } = useTheme();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<StyledEngineProvider injectFirst>
					<Box sx={{ background }}>
						<BrowserRouter>
							<Routes>
								<Route index element={<Navigate to={"/accueil"} replace={true}/>}/>
								<Route path={"/:anchor"} element={<LandingPage/>}/>
							</Routes>
						</BrowserRouter>
					</Box>
				</StyledEngineProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
