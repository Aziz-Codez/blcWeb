import { Hidden, Typography, Grid } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import ZoomImage from "../../../shared/components/ZoomImage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Content3 = () => {
    
    const { t } = useTranslation();
    
    function scrollBottom() {
      return  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    return (
      <Fragment>
        <Typography variant="h6" paragraph>
        {t("Product.SnippetBIT")} 
        </Typography>
        <Typography variant="h6" paragraph>
          {t("Product.Content3.InOur")}
        </Typography>
        <Grid style={{display:"flex", flexDirection:"row"}}>
          <Grid item lg={9} md={8}>
            <ul>
              <li variant="h7" paragraph>
                {t("Product.Content3.MailServer")}
              </li>
              <li variant="h7" paragraph>
                {t("Product.Content3.Calender")}
              </li>
              <li variant="h7" paragraph>
                {t("Product.Content3.Planner")}
              </li>
              <li variant="h7" paragraph>
                {t("Product.Content3.Video")}
              </li>
              <li variant="h7" paragraph>
                Chat
              </li>
              <li variant="h7" paragraph>
                VTC 
              </li>
              <li variant="h7" paragraph>
                {t("Product.Content3.ToDoList")}
              </li>
              <li variant="h7" paragraph>
                {t("Product.Content3.DocumentSharing")} 
              </li>
              <li variant="h7" paragraph>
                {t("Product.Content3.OfficeDocs")}
              </li>
              <li variant="h7" paragraph>
                {t("Product.Content3.CollaborationTools")} 
              </li>
            </ul>
          </Grid>
          <Hidden smDown>
            <Grid item lg={3} md={4}>
              <ZoomImage src="../../images/products/blcCloudService.png"  width="100%" height="auto" alt="blc-cloud"/>
            </Grid>
          </Hidden>
        </Grid>
        <Typography variant="h6" paragraph>
         {t("Product.Content3.OurServices")} 
        </Typography>
        <div style={{display:"flex", flexDirection:"row"}}>
          <Grid item lg={9} md={8}>
            <Typography variant="h6" paragraph marginTop="3%">
              Better Life IT Service,{t("Product.Content3.because")} 
            </Typography>
            <Typography variant="h7">
              <ul>
                <li>{t("Product.Content3.goodFor")} </li>
                <li>{t("Product.Content3.LessTedious")} </li>
                <li>{t("Product.Content3.UserFriendly")} </li>
                <li>{t("Product.Content3.Sustainable")} </li>
              </ul>
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item lg={3} md={4} style={{marginTop:"7%"}}>
              <img src="../../images/bit.png" alt="" width="100%" height="auto" />
            </Grid>
          </Hidden>
        </div>
        <Hidden smUp>
            <Grid item lg={3} md={4} style={{ justifyContent:"center", textAlign:"center"}}>
              <img src="../../images/bit.png" alt="" width="70%" height="auto"/>
            </Grid>
        </Hidden>
        <div style={{display:"flex", flexDirection:"column"}}>
          <a style={{color:"black", }} href='../../pdf/blc-bro-conv.pdf' download>
            <Typography variant="h7">
              {t("Product.Content3.Check")} 
            </Typography>
          </a>
          <Link style={{color:"black", }} onClick={scrollBottom}>
            <Typography variant="h7">
            {t("Product.Content3.Demo")} 
            </Typography>
          </Link>
        </div>
        <Hidden smUp>
          <Grid >
            <ZoomImage src="../../images/products/blcCloudService.png"  width="90%" height="auto" alt="blc-cloud"/>
          </Grid>
        </Hidden>
      </Fragment>
    )
}

export default Content3;