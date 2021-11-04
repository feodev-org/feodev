import { createTheme, PaletteMode, Theme, ThemeOptions, useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

enum ColorScheme {
	LIGHT = "light",
	DARK = "dark"
}

export const lightThemeOptions: ThemeOptions = {
	palette: {
		mode: "light",
		primary: {
			main: "#00796b"
		},
		secondary: {
			main: "#8d6e63"
		},
		error: {
			main: "#f44336"
		}
	},
	components: {
		MuiSwitch: {
			styleOverrides: {
				root: {
					width: 42,
					height: 26,
					padding: 0,
					margin: 8
				},
				switchBase: {
					padding: 1,
					"&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
						transform: "translateX(16px)",
						color: "#fff",
						"& + $track": {
							opacity: 1,
							border: "none"
						}
					}
				},
				thumb: {
					width: 24,
					height: 24
				},
				track: {
					borderRadius: 13,
					border: "1px solid #bdbdbd",
					backgroundColor: "#fafafa",
					opacity: 1,
					transition:
						"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					background:
						"linear-gradient(45deg, #6fffff 0%, #00ffe2 30%, #00cbb0 90%)",
					border: 0,
					borderRadius: 3,
					boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
					color: "white",
					height: 48,
					padding: "0 30px"
				}
			}
		}
	},
	typography: {
		fontSize: 14,
		fontFamily: "Fira Code"
	}
};

export const darkThemeOptions: ThemeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#009688"
		},
		secondary: {
			main: "#795548"
		},
		error: {
			main: "#f44336"
		}
	},
	components: {
		MuiSwitch: {
			styleOverrides: {
				root: {
					width: 42,
					height: 26,
					padding: 0,
					margin: 8
				},
				switchBase: {
					padding: 1,
					"&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
						transform: "translateX(16px)",
						color: "#fff",
						"& + $track": {
							opacity: 1,
							border: "none"
						}
					}
				},
				thumb: {
					width: 24,
					height: 24
				},
				track: {
					borderRadius: 13,
					border: "1px solid #bdbdbd",
					backgroundColor: "#fafafa",
					opacity: 1,
					transition: "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					background:
						"linear-gradient(45deg, #6fffff 0%, #00ffe2 30%, #00cbb0 90%)",
					border: 0,
					borderRadius: 3,
					boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
					color: "white",
					height: 48,
					padding: "0 30px"
				}
			}
		}
	},
	typography: {
		fontSize: 14,
		fontFamily: "Fira Code"
	}
};

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => mode === ColorScheme.LIGHT ? lightThemeOptions : darkThemeOptions;

export const useTheme = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? ColorScheme.DARK : ColorScheme.LIGHT);
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
		console.log("theme: ", theme)
	}, [theme])

	useEffect(() => {
		setMode(prefersDarkMode ? ColorScheme.DARK : ColorScheme.LIGHT);
	}, [prefersDarkMode]);

	return {
		colorMode,
		theme
	};
};

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {
	}
});