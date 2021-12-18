import { createTheme, PaletteMode, Theme, ThemeOptions, useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

enum ColorScheme {
	LIGHT = "light",
	DARK = "dark"
}

export const background = "linear-gradient(90deg, #f4e8b8 0%, #fffae3 35%, #f4e8b8 100%)";

const lightBackground = background;
const darkBackground = background;

export const lightThemeOptions: ThemeOptions = {
	palette: {
		mode: "light",
		primary: {
			main: "#0C4DA7"
		},
		secondary: {
			main: "#EEC30E"
		}
	},
	typography: {
		fontSize: 14,
		fontFamily: "Fira Code"
	}
};

export const darkThemeOptions: ThemeOptions = lightThemeOptions;

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => mode === ColorScheme.LIGHT ? lightThemeOptions : darkThemeOptions;

export const useTheme = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? ColorScheme.DARK : ColorScheme.LIGHT);
	const [background, setBackground] = useState<string>(prefersDarkMode ? darkBackground : lightBackground);
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT
				);
			}
		}),
		[]
	);
	const theme: Theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	useEffect(() => {
		setBackground(prefersDarkMode ? darkBackground : lightBackground);
		setMode(prefersDarkMode ? ColorScheme.DARK : ColorScheme.LIGHT);
	}, [prefersDarkMode]);

	return {
		background,
		colorMode,
		theme
	};
};

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {
	}
});