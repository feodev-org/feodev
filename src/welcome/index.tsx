import { Grid, Typography } from "@mui/material";
import classes from "./styles.module.css";
import { useTranslation } from "react-i18next";
import MailingListForm from "../form/mailing-list";
import NextPageButton from "../next-page-button";

const Welcome = () => {
	const [translate] = useTranslation();

	return (
		<Grid container className={classes.welcomeContainer} spacing={{ xs: 2, md: 4 }}>
			<Grid item>
				<img src={"/assets/logo.png"} alt={"Logo Feodev"} className={classes.logo}/>
			</Grid>
			<Grid item>
				<Typography
					variant={"h1"}
					color={"primary"}
					textAlign={"center"}
					className={classes.title}
				>
					{translate("welcome.title")}
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant={"h3"}
					color={"primary"}
					textAlign={"center"}
					className={classes.motto}
				>
					{translate("welcome.motto")}
				</Typography>
			</Grid>
			<MailingListForm/>
			<Grid item>
				<Typography
					component={"div"}
					variant={"caption"}
					color={"primary"}
					textAlign={"center"}
					width={"70vw"}
				>
					{translate("welcome.description")}
				</Typography>
			</Grid>
			<NextPageButton/>
		</Grid>
	);
};

export default Welcome;