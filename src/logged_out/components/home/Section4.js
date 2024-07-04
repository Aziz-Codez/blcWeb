import React from "react";
import './Section4.css';
import { useTranslation } from "react-i18next";

const SocialMedia = () => {

    const { t } = useTranslation();

    return(
        <div className="social-wrapper">
            <h1 className="social-text">{t('socialMedia')}</h1>
            <div className="divSocial">
                <iframe 
                title="Instagram"
                src='https://www.juicer.io/api/feeds/blc_css/iframe' 
                frameborder='0' width='1200rem' height='500' className="iframeSocial"/>
                <div className="boxSocial"/>
            </div>
        </div>
    )
}

export default SocialMedia;