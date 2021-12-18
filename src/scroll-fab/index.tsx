import React from "react";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTranslation } from "react-i18next";

const ScrollFab = () => {
	const [translate] = useTranslation();
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200
	});

	const handleScroll = () => window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});

	return (
		<Zoom in={trigger}>
			<Fab
				color="secondary"
				aria-label={translate("scroll-to-top")}
				size="small"
				onClick={handleScroll}
				sx={{
					position: "fixed",
					bottom: "33px",
					right: "22px",
					margin: "0px",
					top: "auto",
					left: "auto"
				}}
			>
				<ExpandLessIcon color={"primary"}/>
			</Fab>
		</Zoom>
	);
};

export default ScrollFab;