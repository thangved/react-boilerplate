import i18n from "i18next";
import BrowserLanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";
import { i18nextPlugin } from "translation-check";
import resources from "virtual:i18next-loader";

i18n.use(BrowserLanguageDetector)
	.use(ChainedBackend)
	.use(i18nextPlugin)
	.use(initReactI18next)
	.init({
		backend: {
			backends: [HttpBackend, LocalStorageBackend],
		},
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		resources,
	});

export default i18n;
