import { Box } from "@mui/material";
import { useClasses } from "../hooks/use-classes";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { toBinary } from "../helpers";

interface DecoratorProps {
	text: string;
	variant?: string;
	className: string;
	top: string;
}

const Decorator = (props: DecoratorProps) => {
	const [displayedText, setDisplayedText] = useState<string>(props.text);
	const decoratorClasses = useClasses([classes.decorator, props.className]);

	useEffect(() => {
		if (props.variant === "binary") {
			setDisplayedText(txt => txt.split("\n").map(el => toBinary(el)).join("\n"));
		}
	}, [props.text, props.variant]);

	return (
		<Box className={decoratorClasses} sx={{ top: props.top }}>{
			displayedText.split("\n").map((line, idx) => (
				<div key={idx} className={classes.decoratorLine}>{line}</div>
			))}
		</Box>
	);
};

export default Decorator;