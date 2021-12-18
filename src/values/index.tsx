import { Grid } from "@mui/material";
import ValueCard from "./value-card";
import classes from "./styles.module.css";
import PageTitle from "../page-title";
import { values } from "../data";

const Values = () => {
	return (
		<Grid container direction={"column"} justifyContent={"space-around"} alignItems={"center"}>
			<Grid item className={classes.pageTitle}>
				<PageTitle localizationKey={"values.page-title"}/>
			</Grid>
			<Grid item container direction={"row"} justifyContent={"space-between"} alignItems={"flex-start"}
				  className={classes.container}>
				{
					values.map((value, index) => (
						<Grid item key={value.id} className={classes.containerItem}>
							<ValueCard {...value} index={index + 1}/>
						</Grid>
					))
				}
				<Grid item className={classes.emptyContainerItem}/>
				<Grid item className={classes.emptyContainerItem}/>
				<Grid item className={classes.emptyContainerItem}/>
				<Grid item className={classes.emptyContainerItem}/>
			</Grid>
		</Grid>
	);
};

export default Values;