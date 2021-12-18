import { Grid, Link, Stack, Typography } from "@mui/material";
import PageTitle from "../page-title";
import { useTranslation } from "react-i18next";
import { partners } from "../data";
import classes from "./styles.module.css";
import PartnerCard from "./partner-card";
import { Link as RouterLink } from "react-router-dom";

const Partners = () => {
	const [translate] = useTranslation();

	return (
		<Grid container direction={"column"} justifyContent={"space-around"} alignItems={"center"}>
			<Grid item>
				<PageTitle localizationKey={"partners.page-title"}/>
			</Grid>
			<Grid item className={classes.description}>
				{translate("partners.description")}
			</Grid>
			<Grid item container direction={"column"} justifyContent={"flex-start"} alignItems={"center"}>
				{
					partners.map(partner => (
						<Grid item key={partner.id} mb={13}>
							<PartnerCard {...partner} />
						</Grid>
					))
				}
				<Grid item key={"proposal"}>
					<Stack direction={"column"}>
						<Typography variant={"h6"} alignSelf={"center"} className={classes.partnerTitle}>{translate("partners.proposal.title")}</Typography>
						<Typography variant={"caption"}>{translate("partners.proposal.description")}</Typography>
						<Link component={RouterLink} to={"/contact"} alignSelf={"center"}>Nous contacter</Link>
					</Stack>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Partners;