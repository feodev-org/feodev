import { Grid } from "@mui/material";
import ContactForm from "../form/contact";
import PageTitle from "../page-title";
import classes from "./styles.module.css";

const Contact = () => {
	return (
		<Grid container className={classes.container} spacing={{ xs: 2, md: 4 }}>
			<Grid item xs={12}>
				<PageTitle localizationKey={"contact.page-title"}/>
			</Grid>
			<Grid item xs={12}>
				<ContactForm/>
			</Grid>
		</Grid>
	);
};

export default Contact;