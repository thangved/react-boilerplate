import i18n from "i18next";
import BrowserLanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import resources from "virtual:i18next-loader";

i18n.use(BrowserLanguageDetector).init({
	backend: {
		backends: [LocalStorageBackend],
	},
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	resources,
});

export default i18n;
