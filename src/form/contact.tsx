import { Button, Grid, TextField } from "@mui/material";
import { useClasses } from "../hooks/use-classes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import classes from "./styles.module.css";
import { encodeFormData } from "../helpers";
import { NetlifyForm } from "../types.defs";

interface ContactFormSchema {
	email: string;
	name: string;
	message: string;
	"important-field"?: string;
}

const contactFormSchema = yup.object({
	"important-field": yup.string().notRequired(),
	email: yup.string().required().email(),
	name: yup.string().required().max(50),
	message: yup.string().required().max(500)
});

const ContactForm = () => {
	const [translate] = useTranslation();
	const containerClasses = useClasses([classes.form, classes.contactForm]);
	const submitButtonClasses = useClasses([classes.contactFormSubmit, classes.submitContainer, classes.fieldContainer]);
	const fieldClasses = useClasses([classes.field, classes.contactFormField]);
	const { register, formState: { errors }, handleSubmit } = useForm<ContactFormSchema>({
		resolver: yupResolver(contactFormSchema)
	});

	const onFormSubmit = (data: ContactFormSchema) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encodeFormData<ContactFormSchema & NetlifyForm>({ "form-name": "contact", ...data })
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
			<Grid item xs={12}>
				<input type={"text"} {...register("important-field")} className={classes.honeypot}/>
			</Grid>
			<Grid item xs={12} className={classes.fieldContainer}>
				<TextField
					variant={"outlined"}
					color={"primary"}
					size={"medium"}
					label={translate("welcome.form.name")}
					inputProps={register("name")}
					error={Boolean(errors.name)}
					helperText={Boolean(errors.name) && translate("welcome.form.error.name")}
					autoComplete={"name"}
					className={fieldClasses}
				/>
			</Grid>
			<Grid item xs={12} className={classes.fieldContainer}>
				<TextField
					variant={"outlined"}
					color={"primary"}
					size={"medium"}
					label={translate("welcome.form.email")}
					inputProps={register("email")}
					error={Boolean(errors.email)}
					helperText={Boolean(errors.email) && translate("welcome.form.error.email")}
					autoComplete={"email"}
					className={fieldClasses}
				/>
			</Grid>
			<Grid item xs={12} className={classes.fieldContainer}>
				<TextField
					variant={"outlined"}
					multiline
					color={"primary"}
					size={"medium"}
					label={translate("welcome.form.message")}
					inputProps={{ ...register("message"), className: classes.textarea }}
					error={Boolean(errors.message)}
					helperText={Boolean(errors.message) && translate("welcome.form.error.message")}
					autoComplete={"message"}
					className={fieldClasses}
				/>
			</Grid>
			<Grid item xs={12} className={submitButtonClasses}>
				<Button type={"submit"} color={"primary"} size={"large"} variant={"contained"}>Envoyer</Button>
			</Grid>
		</Grid>
	);
};

export default ContactForm;