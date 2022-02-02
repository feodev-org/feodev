import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { forwardRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, Link, Typography } from "@mui/material";
import { PAGE_ANCHORS } from "../data";
import { Link as RouterLink, useParams } from "react-router-dom";
import classes from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { scrollToElementWithId } from "../helpers";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const MobileMenu = () => {
	const { anchor } = useParams();
	const [menuDialog, setMenuDialogOpen] = useState<boolean>(false);
	const [translate] = useTranslation();

	const handlePageScroll = (elementId: string) => {
		setMenuDialogOpen(false);
		setTimeout(() => {
			scrollToElementWithId(elementId);
		}, 200);
	};

	return (
		<>
			<IconButton aria-label="menu" onClick={() => setMenuDialogOpen(true)}>
				<MenuIcon color={"primary"} />
			</IconButton>
			<Dialog
				fullScreen
				open={menuDialog}
				onClose={() => setMenuDialogOpen(false)}
				TransitionComponent={Transition}
			>
				<Grid container className={classes.mobileMenu}>
					<Grid item container direction={"row"} justifyContent={"center"} alignItems={"center"}>
						{
							PAGE_ANCHORS.map((item, idx) => (
								<Grid key={idx} item xs={12} className={classes.mobileMenuItem}>
									<Link
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
								</Grid>
							))
						}
						<Grid key={'blog-link'} item xs={12} className={classes.mobileMenuItem}>
							<Link
								href={`https://blog.feodev.org`}
								target="_blank"
								rel="noopener noreferrer"
								underline={"none"}
								mr={8}
							>
								<Typography variant="button" component="div" color={"primary"} className={classes.blogTab}>
									<Box mr={1}>{translate(`header.blog`)}</Box>
									<OpenInNewIcon fontSize={"small"} />
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Dialog>
		</>
	);
};

export default MobileMenu;