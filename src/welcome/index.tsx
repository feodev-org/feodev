import { Grid, Typography } from "@mui/material";
import classes from "./styles.module.css";
import { useTranslation } from "react-i18next";
import MailingListForm from "../form/mailing-list";
import NextPageButton from "../next-page-button";

const Welcome = () => {
	const [translate] = useTranslation();

	return (
		<Grid container className={classes.welcomeContainer}>
			<Grid item>
				<Typography variant={"h1"} color={"primary"}>{translate("welcome.title")}</Typography>
			</Grid>
			<Grid item>
				<Typography variant={"h3"} color={"primary"}>{translate("welcome.motto")}</Typography>
			</Grid>
			<MailingListForm/>
			<Grid item>
				<Typography variant={"caption"} color={"primary"}>{translate("welcome.description")}</Typography>
			</Grid>
			<NextPageButton/>
		</Grid>
	);
};

export default Welcome;