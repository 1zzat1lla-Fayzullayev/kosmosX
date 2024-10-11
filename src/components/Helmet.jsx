/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const DOMAINS = "https://eduagency.uz/";
const MAIN_KEYWORDS = "Denklik belgisi Toshkent, Denklik sertifikat uz, turkiyada o'qish, deknlik belgesi Tashkent, turk tili o'rganish, Turkiya viza, turkiyada talaba bo'lish, Turkiya universitetlari, Сертификат Denklik, tenglashtirish sertifikati, ekvivalensiya belgisi, денклик сертификат, эквивалентность, трансфер студентов";

const DEFAULT_TITLE = "EduAgency";
const DEFAULT_DESCRIPTION = "EduAgency";
const POSTFIX_TITLE = " - EduAgency";

function Helmet({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    link,
    keywords = "",
    noIndex = false,
    children
}) {
    const metaTitle = title + (title !== DEFAULT_TITLE ? POSTFIX_TITLE : '');
    const metaLink = DOMAINS + link;
    const metaKeywords = keywords ? `${MAIN_KEYWORDS}, ${keywords}` : MAIN_KEYWORDS;
    const metaRobots = noIndex ? "noindex, nofollow" : "index, follow";

    return (
        <ReactHelmet>
            <html lang="en" />
            <title>{metaTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={metaLink} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content={metaRobots} />
            <meta property="og:url" content={metaLink} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {children}
        </ReactHelmet>
    );
}

export default Helmet;
