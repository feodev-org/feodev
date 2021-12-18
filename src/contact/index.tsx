import { Grid } from "@mui/material";
import ContactForm from "../form/contact";
import PageTitle from "../page-title";

const Contact = () => {
	return (
		<Grid container direction={"column"}>
			<Grid item>
				<PageTitle localizationKey={"contact.page-title"}/>
			</Grid>
			<Grid item>
				<ContactForm/>
			</Grid>
		</Grid>
	);
};

export default Contact;