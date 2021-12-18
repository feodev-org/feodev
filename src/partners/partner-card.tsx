import { Link, Stack, Typography } from "@mui/material";
import { Partner } from "../types.defs";
import classes from "./styles.module.css";

interface PartnerCardProps extends Partner {
}

const PartnerCard = (props: PartnerCardProps) => {

	return (
		<Stack direction={"column"}>
			<Typography variant={"h6"} alignSelf={"center"} className={classes.partnerTitle}>{props.name}</Typography>
			<img src={`/assets/${props.image}`} alt={`Logo ${props.name}`} className={classes.partnerImage}/>
			<Typography variant={"caption"}>{props.description}</Typography>
			<Link href={props.link} target={"_blank"} rel={"noopener noreferer"} alignSelf={"center"}>Lien</Link>
		</Stack>
	);
};

export default PartnerCard;