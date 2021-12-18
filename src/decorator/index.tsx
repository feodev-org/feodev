import { Box } from "@mui/material";
import { useClasses } from "../hooks/use-classes";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { toBinary } from "../helpers";

interface DecoratorProps {
	text: string;
	variant?: string;
	className: string;
}

interface DecoratorFromTop extends DecoratorProps {
	top: string;
}

interface DecoratorFromBottom extends DecoratorProps {
	bottom: string;
}

const Decorator = (props: DecoratorFromTop | DecoratorFromBottom) => {
	const [displayedText, setDisplayedText] = useState<string>(props.text);
	const decoratorClasses = useClasses([classes.decorator, props.className]);

	useEffect(() => {
		if (props.variant === "binary") {
			setDisplayedText(txt => txt.split("\n").map(el => toBinary(el)).join("\n"));
		}
	}, [props.text, props.variant]);

	return (
		<Box
			className={decoratorClasses}
			sx={"top" in props && props.top !== undefined ? { top: props.top } : "bottom" in props && props.bottom !== undefined ? { bottom: props.bottom } : {}}
		>
			{
				displayedText.split("\n").map((line, idx) => (
					<div key={idx} className={classes.decoratorLine}>{line}</div>
				))
			}
		</Box>
	);
};

export default Decorator;