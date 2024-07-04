import { Grid, Typography, Hidden } from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard";
import "./Section2.css";
import { useTranslation, Trans } from "react-i18next"

function Section2(props) {
  const { t } = useTranslation();

const features = [
  {
    color: "#000E3B",
    headline: t("Avoid vendor lock in"),
    icon: <img src="/images/section2icon/database.svg" width="100%" height="auto" alt=""/>,
    delay: "0",
  },
  {
    color: "#000E3B",
    headline: t("Optimized spend"),
    icon: <img src="/images/section2icon/spend.svg" width="100%" height="auto" alt=""/>,
    delay: "200",
  },
  {
    color: "#000E3B",
    headline: t("High capable/competent cloud SMEs"),
    icon: <img src="/images/section2icon/cloud.svg" width="100%" height="auto" alt=""/>,
    delay: "0",
  },
  {
    color: "#000E3B",
    headline: t("Managing GRC and security"),
    icon: <img src="/images/section2icon/security.svg" width="100%" height="auto" alt=""/>,
    delay: "200",
    text: t("GRC"),
  },
  {
    color: "#000E3B",
    headline: t("Support for open systems"),
    icon: <img src="/images/section2icon/support.svg" width="100%" height="auto" alt=""/>,
    delay: "600",
  },
  {
    color: "#000E3B",
    headline: t("Business agility towards customers"),
    icon: <img src="/images/section2icon/customer.svg" width="100%" height="auto" alt=""/>,
    delay: "400",
  },
  {
    color: "#000E3B",
    headline: t("Multi cloud standardization"),
    icon: <img src="/images/section2icon/multi.svg" width="100%" height="auto" alt=""/>,
    delay: "400",
  },
  {
    color: "#000E3B",
    headline: t("Ecosystem with local-global stakeholders"),
    icon: <img src="/images/section2icon/world.svg" width="100%" height="auto" alt=""/>,
    delay: "600",
  },
];


  
    return(
        <div>
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
          <Trans i18nKey = "Main Driving Factors">
            Main Driving Factors
          </Trans>
          </Typography>
          <Hidden mdDown>
            <Grid className="grid">
                <Grid item lg={0.2} className="gridempty"></Grid>
                <Grid item lg={5.9} className="grid2">
                     
                        <Grid className="featurecard" data-aos="zoom-in-up" data-aos-delay={features[0].delay}>
                        
                        <FeatureCard
                        text={features[0].text}
                        Icon={features[0].icon}
                        color={features[0].color}
                        headline={features[0].headline} 
                        
                        /> 
                      
                    </Grid>
                    <Grid className="featurecard" data-aos="zoom-in-up" data-aos-delay={features[1].delay}>
                        <FeatureCard
                        Icon={features[1].icon}
                        color={features[1].color}
                        headline={features[1].headline}
                        text={features[1].text}
                        />
                    </Grid>
                    <Grid className="featurecard" data-aos="zoom-in-up" data-aos-delay={features[4].delay}>
                        <FeatureCard
                        Icon={features[4].icon}
                        color={features[4].color}
                        headline={features[4].headline}
                        text={features[4].text}
                        />
                    </Grid>
                    <Grid className="featurecard" data-aos="zoom-in-up" data-aos-delay={features[6].delay}>
                        <FeatureCard
                        Icon={features[6].icon}
                        color={features[6].color}
                        headline={features[6].headline}
                        text={features[6].text}
                        />
                    </Grid>
                </Grid>
                <Grid item lg={5.9} className="grid2" data-aos="zoom-in-up">
                    <Grid className="featurecardRight" data-aos="zoom-in-up" data-aos-delay={features[2].delay}>
                        <FeatureCard
                        Icon={features[2].icon}
                        color={features[2].color}
                        headline={features[2].headline}
                        text={features[2].text}
                        />
                    </Grid>
                    <Grid className="featurecardRight" data-aos="zoom-in-up" data-aos-delay={features[3].delay}>
                        <FeatureCard
                        Icon={features[3].icon}
                        color={features[3].color}
                        headline={features[3].headline}
                        text={features[3].text}
                        />
                    </Grid>
                    <Grid className="featurecardRight" data-aos="zoom-in-up" data-aos-delay={features[5].delay}>
                        <FeatureCard
                        Icon={features[5].icon}
                        color={features[5].color}
                        headline={features[5].headline}
                        text={features[5].text}
                        />
                    </Grid>
                    <Grid className="featurecardRight" data-aos="zoom-in-up" data-aos-delay={features[7].delay}> 
                        <FeatureCard
                        Icon={features[7].icon}
                        color={features[7].color}
                        headline={features[7].headline}
                        text={features[7].text}
                        />
                    </Grid>
                </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid className="gridMd">
                <Grid className="grid2Md">
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[0].delay}>
                        <FeatureCard
                        Icon={features[0].icon}
                        color={features[0].color}
                        headline={features[0].headline}
                        text={features[0].text}
                        />
                         
                    </Grid>
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[0].delay}>
                        <FeatureCard
                        Icon={features[1].icon}
                        color={features[1].color}
                        headline={features[1].headline}
                        text={features[1].text}
                        />
                    </Grid>
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[1].delay}>
                        <FeatureCard
                        Icon={features[4].icon}
                        color={features[4].color}
                        headline={features[4].headline}
                        text={features[4].text}
                        />
                    </Grid>
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[1].delay}>
                        <FeatureCard
                        Icon={features[6].icon}
                        color={features[6].color}
                        headline={features[6].headline}
                        text={features[6].text}
                        />
                    </Grid>
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[4].delay}>
                        <FeatureCard
                        Icon={features[2].icon}
                        color={features[2].color}
                        headline={features[2].headline}
                        text={features[2].text}
                        />
                    </Grid>
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[4].delay}>
                        <FeatureCard
                        Icon={features[3].icon}
                        color={features[3].color}
                        headline={features[3].headline}
                        text={features[3].text}
                        />
                    </Grid>
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[6].delay}>
                        <FeatureCard
                        Icon={features[5].icon}
                        color={features[5].color}
                        headline={features[5].headline}
                        text={features[5].text}
                        />
                    </Grid>
                    <Grid className="featurecardMd" data-aos="zoom-in-up" data-aos-delay={features[6].delay}>
                        <FeatureCard
                        Icon={features[7].icon}
                        color={features[7].color}
                        headline={features[7].headline}
                        text={features[7].text}
                        />
                    </Grid>
                </Grid>
            </Grid>
          </Hidden>
        </div>
    )
};

export default Section2;