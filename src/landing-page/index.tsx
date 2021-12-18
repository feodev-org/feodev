import { Grid } from "@mui/material";
import classes from "./styles.module.css";
import ScrollFab from "../scroll-fab";
import Welcome from "../welcome";
import Header from "../header";
import { PAGE_ANCHORS } from "../data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { isNullOrUndefined, scrollToElementWithId } from "../helpers";
import Decorations from "../decorations";
import Contact from "../contact";
import Values from "../values";
import Partners from "../partners";

const LandingPage = () => {
	const { anchor } = useParams();

	useEffect(() => {
		if (isNullOrUndefined(anchor) || anchor === "accueil") {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		} else if (PAGE_ANCHORS.includes(anchor!)) {
			scrollToElementWithId(anchor!);
		}
	}, [anchor]);

	return (
		<Grid
			container
			direction={"column"}
			justifyContent={"flex-start"}
			alignItems={"center"}
			className={classes.sectionContainer}
		>
			<Header/>
			<Decorations/>
			<Grid id={"accueil"} item className={classes.section}>
				<Welcome/>
			</Grid>
			<Grid id={"valeurs"} item className={classes.section}>
				<Values/>
			</Grid>
			<Grid id={"partenaires"} item className={classes.section}>
				<Partners/>
			</Grid>
			<Grid id={"contact"} item className={classes.section}>
				<Contact/>
			</Grid>
			<ScrollFab/>
		</Grid>
	);
};

export default LandingPage;