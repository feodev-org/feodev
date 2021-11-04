import { Grid } from "@mui/material";
import classes from "./styles.module.css";
import ScrollFab from "../scroll-fab";

const LandingPage = () => {
	return (
		<Grid container direction={"column"} justifyContent={"flex-start"} alignItems={"center"}>
			<Grid item className={classes.section}>
				Hello 1
			</Grid>
			<Grid item className={classes.section}>
				Hello 2
			</Grid>
			<Grid item className={classes.section}>
				Hello 3
			</Grid>
			<ScrollFab/>
		</Grid>
	);
};

export default LandingPage;