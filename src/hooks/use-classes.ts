import { useEffect, useState } from "react";

export const useClasses = (classes: string[]): string => {
	const [containerClasses, setContainerClasses] = useState<string>("");

	useEffect(() => {
		setContainerClasses(classes.join(" "));
	}, [classes]);

	return containerClasses;
};