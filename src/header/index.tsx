import { AppBar, Box, Link, Slide, Stack, Toolbar, Typography, useMediaQuery, useScrollTrigger } from "@mui/material";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { PAGE_ANCHORS } from "../data";
import { useTranslation } from "react-i18next";
import { scrollToElementWithId } from "../helpers";
import classes from "./styles.module.css";
import { useTheme } from "../hooks/use-theme";
import MobileMenu from "./mobile-menu";

interface ElevationScrollProps {
	children: ReactElement;
}

const ElevationScroll = (props: ElevationScrollProps) => {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: document.getElementById("root")!
	});

	return cloneElement(children, {
		elevation: trigger ? 8 : 0
	});
};

const Header = () => {
	const { anchor } = useParams();
	const [translate] = useTranslation();
	const { theme } = useTheme();
	const matchSm = useMediaQuery(theme.breakpoints.up("sm"));
	const [scrolledWhileXs, setScrolledWhileXs] = useState<boolean>(false);

	useEffect(() => {
		const rootElement = document.getElementById("root");
		const checkScroll = () => setScrolledWhileXs((rootElement?.scrollTop ?? 0) > window.screen.availHeight);
		rootElement?.addEventListener("scroll", checkScroll);
		return () => rootElement?.removeEventListener("scroll", checkScroll);
	}, []);

	const handlePageScroll = (elementId: string) => {
		scrollToElementWithId(elementId);
	};

	return (
		<>
			<ElevationScroll>
				<Slide in={matchSm || scrolledWhileXs}>
					<AppBar className={classes.appBar}>
						<Toolbar className={classes.toolBar}>
							<Box className={classes.title}>
								<Link component={RouterLink} to={"/"} underline={"none"} mr={8}>
									<Stack direction={"row"} spacing={2}>
										<img src={"/assets/logo.png"} alt={"Logo Feodev"} height={40}/>
										<Typography variant="h4" component="div" color={"primary"}>
											Feodev
										</Typography>
									</Stack>
								</Link>
							</Box>
							<Box className={classes.tabs}>
								{
									PAGE_ANCHORS.map((item, idx) => (
										<Link
											key={idx}
											component={RouterLink}
											to={`/${item}`}
											underline={"none"}
											mr={8}
											onClick={() => handlePageScroll(item)}
										>
											<Typography variant="button" component="div" color={"primary"}
														className={[classes.tab, anchor === item ? classes.activeTab : ""].join(" ")}>
												{translate(`header.${item}`)}
											</Typography>
										</Link>
									))
								}
							</Box>
							<Box className={classes.burgerMenu}>
								<MobileMenu/>
							</Box>
						</Toolbar>
					</AppBar>
				</Slide>
			</ElevationScroll>
			<Slide in={matchSm || scrolledWhileXs}>
				<Toolbar/>
			</Slide>
		</>
	);
};

export default Header;