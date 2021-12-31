import { Grid, TextField } from "@mui/material";
import { useClasses } from "../hooks/use-classes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import classes from "./styles.module.css";
import { encodeFormData } from "../helpers";
import { NetlifyForm } from "../types.defs";
import {useEffect, useState} from "react";
import SubmitButton from "./submit-button";

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
	const { register, formState: { errors, isSubmitting, isSubmitSuccessful }, handleSubmit, setValue } = useForm<MailingListFormSchema>({
		resolver: yupResolver(mailingListFormSchema)
	});
	const [submittedEmail, setSubmittedEmail] = useState<string | undefined>(undefined);

	useEffect(() => {
		const email = localStorage.getItem("feodev-form-mailing-list");
		if (email) {
			setSubmittedEmail(email);
			setValue("email", email);
		}
	}, [setValue]);

	const onFormSubmit = (data: MailingListFormSchema) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encodeFormData<MailingListFormSchema & NetlifyForm>({ "form-name": "mailing-list", ...data })
		}).then(() => {
			console.log("Submit form: ", data);
			localStorage.setItem("feodev-form-mailing-list", data.email);
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
			<Grid item xs={12} md={11} className={classes.fieldContainer}>
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
					disabled={isSubmitSuccessful || submittedEmail !== undefined}
				/>
			</Grid>
			<Grid item xs={12} md={1} className={classes.fieldContainer}>
				<SubmitButton
					disabled={Boolean(errors.email) || isSubmitSuccessful || submittedEmail !== undefined}
					loading={isSubmitting}
					success={isSubmitSuccessful}
				/>
			</Grid>
		</Grid>
	);
};

export default MailingListForm;