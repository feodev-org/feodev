import i18n from "i18next";
import translation from "./translations/fr.json";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
	fallbackLng: ["fr"],
	interpolation: {
		escapeValue: false
	},
	resources: {
		fr: {
			translation
		}
	}
});

export default i18n;