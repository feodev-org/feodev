import { AppBar, Box, Link, Stack, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { cloneElement, ReactElement } from "react";
import classes from "./styles.module.css";
import { Link as RouterLink, useParams } from "react-router-dom";
import { PAGE_ANCHORS } from "../data";
import { useTranslation } from "react-i18next";
import { scrollToElementWithId } from "../helpers";

interface ElevationScrollProps {
	children: ReactElement;
}

const ElevationScroll = (props: ElevationScrollProps) => {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return cloneElement(children, {
		elevation: trigger ? 8 : 0
	});
};

const Header = () => {
	const { anchor } = useParams();
	const [translate] = useTranslation();

	const handlePageScroll = (elementId: string) => {
		scrollToElementWithId(elementId);
	};

	return (
		<>
			<ElevationScroll>
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
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar/>
		</>
	);
};

export default Header;