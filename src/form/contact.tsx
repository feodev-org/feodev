import { Grid, TextField } from "@mui/material";
import { useClasses } from "../hooks/use-classes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import classes from "./styles.module.css";
import { encodeFormData } from "../helpers";
import { NetlifyForm } from "../types.defs";
import SubmitButton from "./submit-button";
import {useEffect, useState} from "react";

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
	const { register, formState: { errors, isSubmitSuccessful, isSubmitting }, handleSubmit, setValue } = useForm<ContactFormSchema>({
		resolver: yupResolver(contactFormSchema)
	});
	const [submittedForm, setSubmittedForm] = useState<ContactFormSchema | undefined>(undefined);

	useEffect(() => {
		const formStr = localStorage.getItem("feodev-form-contact");
		if (formStr) {
			try {
				const parsedForm = JSON.parse(formStr) as ContactFormSchema;
				setSubmittedForm(parsedForm);
				setValue("email", parsedForm.email);
				setValue("name", parsedForm.name);
				setValue("message", parsedForm.message);
			} catch (err) {
				console.error("Unable to parse form data from previous submission: ", err);
				localStorage.removeItem("feodev-form-contact");
			}
		}
	}, [setValue]);

	const onFormSubmit = (data: ContactFormSchema) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encodeFormData<ContactFormSchema & NetlifyForm>({ "form-name": "contact", ...data })
		}).then(() => {
			console.log("Submit form: ", data);
			localStorage.setItem("feodev-form-contact", JSON.stringify(data));
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
					disabled={isSubmitSuccessful || submittedForm?.name !== undefined}
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
					disabled={isSubmitSuccessful || submittedForm?.email !== undefined}
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
					disabled={isSubmitSuccessful || submittedForm?.message !== undefined}
				/>
			</Grid>
			<Grid item xs={12} className={submitButtonClasses}>
				<SubmitButton
					disabled={Boolean(errors.email) || isSubmitSuccessful || submittedForm !== undefined}
					loading={isSubmitting}
					success={isSubmitSuccessful}
				/>
			</Grid>
		</Grid>
	);
};

export default ContactForm;