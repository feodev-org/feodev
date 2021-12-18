import { Value } from "../types.defs";
import { Box, Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import classes from "./styles.module.css";

interface ValueCardProps extends Value {
	index: number;
}

const ValueCard = (props: ValueCardProps) => {
	const [translate] = useTranslation();

	return (
		<Card className={classes.cardContainer}>
			<Box className={classes.imageContainer}>
				<CardMedia
					component="img"
					height="140"
					image={`/assets/${props.image}`}
					alt={translate(`values.${props.id}.image-description`)}
					className={classes.image}
				/>
				<Typography className={classes.imageCredits}>
					{translate("credits")}&nbsp;
					<Link
						href={props.credits.accountUrl}
						className={classes.imageCreditsLink}
					>
						{props.credits.name}
					</Link>
					&nbsp;/&nbsp;
					<Link
						href={props.credits.originUrl}
						className={classes.imageCreditsLink}
					>
						{props.credits.originName}
					</Link>
				</Typography>
				<Typography className={classes.ruleIndex}>{props.index}</Typography>
			</Box>
			<CardContent>
				<Typography gutterBottom variant="h5">
					{translate(`values.${props.id}.name`)}
				</Typography>
				<Typography variant="body2">
					{translate(`values.${props.id}.definition`)}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ValueCard;