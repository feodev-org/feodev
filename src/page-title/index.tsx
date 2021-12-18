import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface PageTitleProps {
	localizationKey: string;
}

const PageTitle = (props: PageTitleProps) => {
	const [translate] = useTranslation();

	return (
		<Typography variant={"h5"} color={"primary"}>{translate(props.localizationKey)}</Typography>
	);
};

export default PageTitle;