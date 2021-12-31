import classes from "./styles.module.css";
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface SubmitButtonProps {
    disabled: boolean;
    loading: boolean;
    success: boolean;
}

const SubmitButton = (props: SubmitButtonProps) => {
    const [translate] = useTranslation();

    return (
        <Button
            type={"submit"}
            color={props.success ? "success" : "primary"}
            size={"large"}
            variant={"contained"}
            className={classes.submit}
            disabled={props.disabled}
        >
            {props.success ? (
                <CheckCircleIcon />
            ) : translate("welcome.form.submit")}
        </Button>
    );
}

export default SubmitButton;