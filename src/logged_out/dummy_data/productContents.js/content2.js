import { Hidden, Typography } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import ZoomImage from "../../../shared/components/ZoomImage";
import { useTranslation } from "react-i18next";

const Content2 = () => {

  const { t } = useTranslation();

    return (
      <Fragment>

        <Typography variant="h6" paragraph>
            {t("Product.SnippetPlatform")}     
        </Typography>

        <Typography variant="h6" paragraph>
          Container Orchestration
          <Typography fontSize={20}>
            Kubernetes, Docker
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          Load Balancer
          <Typography fontSize={20}>
            Octavia/HAProxy
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          Caching
          <Typography fontSize={20}>
            Varnish
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          DB Services
          <Typography fontSize={20}>
            PostgreSQL, mongoDB, Cassandra, Maria Galera Cluster
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          Application Server
          <Typography fontSize={20}>
            nginx
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          VTK Platform
          <Typography fontSize={20}>
            JITSI
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          Video Streaming
          <Typography fontSize={20}>
            H263, H264, mpeg4, etc.
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          Mail Server
          <Typography fontSize={20}>
            MailU
          </Typography>
        </Typography>
        <Typography variant="h6" paragraph>
          Big Data As A Service
          <Typography fontSize={20}>
            Hadoop
          </Typography>
        </Typography>
        <Hidden smDown>
          <ZoomImage src="../../images/products/paas.png"  width="30%" height="auto" alt="paas"/>
        </Hidden>
        <Hidden smUp>
          <ZoomImage src="../../images/products/paas.png"  width="80%" height="auto" alt="paas"/>
        </Hidden>
      </Fragment>
    )
}

export default Content2;