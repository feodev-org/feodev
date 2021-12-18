import Decorator from "../decorator";
import { texts } from "../data";
import classes from "./styles.module.css";

const Decorations = () => {
	return (
		<>
			<Decorator text={texts[0]} className={classes.left} top={"80vh"}/>
			<Decorator text={texts[1]} className={classes.right} top={"10vh"} variant={"binary"}/>
			<Decorator text={texts[1]} className={classes.right} top={"110vh"}/>
			<Decorator text={texts[0]} className={classes.left} top={"190vh"} variant={"binary"}/>
		</>
	);
};

export default Decorations;