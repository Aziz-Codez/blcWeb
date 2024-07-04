import React from 'react';
import "./Section5.css";
import { useTranslation } from "react-i18next";
import { Link } from '@mui/material';

const images = [
    {
        src:'images/iso/ISO-45001.png',
        alt:"ISO-45001:2018",
        description:"iso-45001",
        link:'images/certificates/45001.jpg',
    },
    {
        src:'images/iso/ISO-27001.png',
        alt:"ISO-27001:2017",
        description:"iso-27001",
        link:'images/certificates/27001.pdf',
    },
    {
        src:'images/iso/ISO-9001.png',
        alt:"ISO-9001:2015",
        description:"iso-9001",
        link:'images/certificates/9001.jpg',
    },
    {
        src:'images/iso/ISO-10002.png',
        alt:"ISO-10002:2018",
        description:"iso-10002",
        link:'images/certificates/10002.jpg',
    },
    {
        src:'images/iso/ISO-14001.jpeg',
        alt:"ISO-14001:2015",
        description:"iso-14001",
        link:'images/certificates/14001.png',
    },
  ];

function Section5() {
    const { t } = useTranslation();
    return(
        <div className='section5div'>
            <div style={{fontSize:"2rem", fontFamily:"sans-serif", textAlign:"center", margin:"1%", color:"#33383b"}}>{t('certificates')}</div>
            <div className='section5box'>
                {images.map((img, index) => 
                    <Link style={{ textAlign:"center", margin:"10%"}} underline="hover" color="#1f4b78" href={img.link}>
                        <img key={index} alt={img.alt} className="section5image" src={img.src} />
                        <div style={{fontFamily:"sans-serif", color:"#33383b"}}>
                            {t(img.description)}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default Section5;