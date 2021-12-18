import classes from "./styles.module.css";
import DoubleKeyboardArrowDownIcon from "../icons/double-keyboard-arrow-down-icon";
import { Box, Link } from "@mui/material";
import { useClasses } from "../hooks/use-classes";
import { Link as RouterLink } from "react-router-dom";
import { scrollToElementWithId } from "../helpers";

const NextPageButton = () => {
	const arrowButtonIconClasses = useClasses([classes.arrowButtonIcon, classes.bounceAlpha]);

	const handleNextPage = () => {
		scrollToElementWithId("valeurs");
	};

	return (
		<Link component={RouterLink} to={"/valeurs"} underline={"none"} onClick={handleNextPage}>
			<Box className={classes.buttonContainer}>
				<Box className={classes.arrowButton} display={{ xs: "none", sm: "flex" }}>
					<DoubleKeyboardArrowDownIcon color={"primary"} className={arrowButtonIconClasses}/>
				</Box>
			</Box>
		</Link>
	);
};

export default NextPageButton;