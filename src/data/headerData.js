import { useContext, useEffect, useState } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const useHeaderData = () => {
    const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = [
                { title: getText("headerSwiperTitle2"), description: getText("headerSwiperParagraph2"), headerLink: '/student-transfer', bgImage: "/img/header2.png", mobBgImage: "https://cdn.culture.ru/images/cf73ffdd-5879-591e-9f76-39d8bc27f7d6" },

            ];
            setHeaderData(data);
        };

        fetchData();
    }, [changeLanguage, selectedLanguage]);

    return headerData;
};

export default useHeaderData;