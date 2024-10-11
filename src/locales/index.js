import { en } from "./EN";
import { uz } from "./UZ";
import { tr } from "./TR";
import { LANGUAGE } from "../tools/constants";

export const flagImages = {
    uz: "/img/uzb.png",
    en: "/img/usa.png",
    tr: "/img/tr.png",
};

export const getLanguage = () => {
    const storedLanguage = localStorage.getItem(LANGUAGE);
    return storedLanguage ? storedLanguage : "uz";
};

export const getText = (word) => {
    const language = getLanguage();
    return language === "uz" ?
        uz[word] :
        language === "en" ?
        en[word] :
        tr[word];
};