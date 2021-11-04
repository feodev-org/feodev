import React, { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollFab = () => {
	const [scrollToTopButtonEnabled, setScrollToTopButtonState] = useState<boolean>(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 200) {
				setScrollToTopButtonState(true);
			} else {
				setScrollToTopButtonState(false);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleScroll = () => window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});

	return (
		<Fab
			color="secondary"
			aria-label="Remonter en haut de la page"
			size="small"
			onClick={handleScroll}
			sx={{
				position: "fixed",
				bottom: "33px",
				right: "22px",
				margin: "0px",
				top: "auto",
				left: "auto",
				transform: `scale(${scrollToTopButtonEnabled ? 1 : 0})`,
				transition: "transform 0.2s ease 0s"
			}}
		>
			<ExpandLessIcon/>
		</Fab>
	);
};

export default ScrollFab;