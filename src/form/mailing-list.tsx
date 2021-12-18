import { Button, Grid, TextField } from "@mui/material";
import { useClasses } from "../hooks/use-classes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import classes from "./styles.module.css";
import { encodeFormData } from "../helpers";
import { NetlifyForm } from "../types.defs";

interface MailingListFormSchema {
	email: string;
	"important-field"?: string;
}

const mailingListFormSchema = yup.object({
	"important-field": yup.string().notRequired(),
	email: yup.string().required().email()
});

const MailingListForm = () => {
	const [translate] = useTranslation();
	const containerClasses = useClasses([classes.form, classes.mailingListForm]);
	const { register, formState: { errors }, handleSubmit } = useForm<MailingListFormSchema>({
		resolver: yupResolver(mailingListFormSchema)
	});

	const onFormSubmit = (data: MailingListFormSchema) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encodeFormData<MailingListFormSchema & NetlifyForm>({ "form-name": "mailing-list", ...data })
		}).then(() => {
			console.log("Submit form: ", data);
		}).catch(error => {
			console.error("Error while submitting form: ", { error, data });
		});
	};

	return (
		<Grid
			component={"form"}
			item
			container
			className={containerClasses}
			onSubmit={handleSubmit(onFormSubmit)}
		>
			<input type={"text"} {...register("important-field")} className={classes.honeypot}/>
			<Grid item mr={{ xs: 0, md: 4 }} xs={12} md={8} className={classes.fieldContainer}>
				<TextField
					variant={"outlined"}
					color={"primary"}
					size={"medium"}
					label={translate("welcome.form.email")}
					inputProps={register("email")}
					error={Boolean(errors.email)}
					helperText={Boolean(errors.email) && translate("welcome.form.error.email")}
					autoComplete={"email"}
					className={classes.field}
				/>
			</Grid>
			<Grid item xs={12} md={3} className={classes.fieldContainer}>
				<Button type={"submit"} color={"primary"} size={"large"} variant={"contained"} className={classes.submit}>Envoyer</Button>
			</Grid>
		</Grid>
	);
};

export default MailingListForm;