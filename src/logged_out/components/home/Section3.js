import { Typography, Hidden } from "@mui/material";
import React from "react";
import "./Section3.css";
import { useTranslation } from "react-i18next"


function Section() {
    const { t } = useTranslation();

    return(
        <div style={{display:"flex", flexDirection:"column", marginBottom:"5%"}}>
            <Typography
                variant="h3"
                align="center"
                className="lg-mg-bottom"
                fontFamily={"sans-serif"}
                color="#33383b"
                sx={{fontSize: {lg:50,md: 40,sm: 35,xs:25}}}
                style={{marginTop:"5%"}}
                data-aos="zoom-in-up"
            >
                {t("Communication for a Better LIFE")}
                <Typography
                variant="h3"
                align="center"
                fontFamily={"sans-serif"}
                color="#33383b"
                marginTop="1%"
                sx={{fontSize: {lg:40,md: 30,sm: 25,xs:25}}}
                data-aos="zoom-in-up"
                >
                    {t("Communication for")}
                </Typography>
            </Typography>
            <Hidden mdDown>
                <div className="div" style={{marginTop:"-5%",marginBottom:"3%"}} data-aos="zoom-in-up" data-aos-delay="200">
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front" >
                                <h2 style={{fontWeight:400}}>{t("Network, Data Center and Cloud Solutions")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}> 
                                    <li>{t("Cloud Solutions")}</li>
                                    <li>{t("Software Defined Data Center")}</li>
                                    <li>{t("Software Defined Wide Area Network")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Consulting and System Integration Services")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Cost Effective")}</li>
                                    <li>{t("Solution oriented")}</li>
                                    <li>{t("Sustainable")}</li>
                                    <li>{t("Confidence Oriented")}</li>
                                    <li>{t("Domestic and International Service")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Telecom Infrastructure")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Transmission Network")}</li>
                                    <li>{t("Vertical Sector Applications")}</li>
                                    <li>{t("IoT")}</li>
                                    <li>{t("Access Network")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div" data-aos="zoom-in-up" data-aos-delay="400">
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Data Fusion with Artificial Intelligence")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Data Fusion Analytics")}</li>
                                    <li>{t("Smart City")}</li>
                                    <li>{t("Energy Optimization")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("E2E Application (Mobile) Development")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Software Development")}</li>
                                    <li>{t("Mobile Application")}</li>
                                    <li>{t("Hardware Integration")}</li>
                                    <li>{t("Central Monitoring")}</li>
                                    <li>{t("Map Application")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp smDown>
                <div className="div" style={{marginTop:"-5%",marginBottom:"3%"}} data-aos="zoom-in-up" data-aos-delay="200">
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front" >
                                <h2 style={{fontWeight:400}}>{t("Network, Data Center and Cloud Solutions")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Cloud Solutions")}</li>
                                    <li>{t("Software Defined Data Center")}</li>
                                    <li>{t("Software Defined Wide Area Network")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Consulting and System Integration Services")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                <li>{t("Cost Effective")}</li>
                                    <li>{t("Solution oriented")}</li>
                                    <li>{t("Sustainable")}</li>
                                    <li>{t("Confidence Oriented")}</li>
                                    <li>{t("Domestic and International Service")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div" style={{marginBottom:"3%"}} data-aos="zoom-in-up" data-aos-delay="400">
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Telecom Infrastructure")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Transmission Network")}</li>
                                    <li>{t("Vertical Sector Applications")}</li>
                                    <li>{t("IoT")}</li>
                                    <li>{t("Access Network")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Data Fusion with Artificial Intelligence")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Data Fusion Analytics")}</li>
                                    <li>{t("Smart City")}</li>
                                    <li>{t("Energy Optimization")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div" data-aos="zoom-in-up" data-aos-delay="600">
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("E2E Application (Mobile) Development")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Software Development")}</li>
                                    <li>{t("Mobile Application")}</li>
                                    <li>{t("Hardware Integration")}</li>
                                    <li>{t("Central Monitoring")}</li>
                                    <li>{t("Map Application")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Hidden>
            <Hidden smUp>
                <div className="div-md">
                    <div className="flip-box md">
                        <div className="flip-box-inner">
                            <div className="flip-box-front" >
                                <h2 style={{fontWeight:400}}>{t("Network, Data Center and Cloud Solutions")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Cloud Solutions")}</li>
                                    <li>{t("Software Defined Data Center")}</li>
                                    <li>{t("Software Defined Wide Area Network")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box md">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Consulting and System Integration Services")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Cost Effective")}</li>
                                    <li>{t("Solution oriented")}</li>
                                    <li>{t("Sustainable")}</li>
                                    <li>{t("Confidence Oriented")}</li>
                                    <li>{t("Domestic and International Service")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box md">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Telecom Infrastructure")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Transmission Network")}</li>
                                    <li>{t("Vertical Sector Applications")}</li>
                                    <li>{t("IoT")}</li>
                                    <li>{t("Access Network")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box md">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("Data Fusion with Artificial Intelligence")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Data Fusion Analytics")}</li>
                                    <li>{t("Smart City")}</li>
                                    <li>{t("Energy Optimization")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <h2 style={{fontWeight:400}}>{t("E2E Application (Mobile) Development")}</h2>
                            </div>
                            <div className="flip-box-back">
                                <h3 style={{fontWeight:400}}>
                                    <li>{t("Software Development")}</li>
                                    <li>{t("Mobile Application")}</li>
                                    <li>{t("Hardware Integration")}</li>
                                    <li>{t("Central Monitoring")}</li>
                                    <li>{t("Map Application")}</li>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Hidden>
        </div>
    )
};

export default Section;