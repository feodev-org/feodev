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
			<Grid item container direction={"column"} justifyContent={"flex-start"} alignItems={"center"} spacing={{ xs: 2, md: 4 }}>
				{
					partners.map(partner => (
						<Grid item key={partner.id}>
							<PartnerCard {...partner} />
						</Grid>
					))
				}
				<Grid item key={"proposal"}>
					<Stack direction={"column"} spacing={{ xs: 2, md: 4 }}>
						<Typography variant={"h6"} alignSelf={"center"} className={classes.partnerTitle}>{translate("partners.proposal.title")}</Typography>
						<Typography variant={"caption"} className={classes.partnerDescription}>{translate("partners.proposal.description")}</Typography>
						<Link component={RouterLink} to={"/contact"} alignSelf={"center"}>Nous contacter</Link>
					</Stack>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Partners;