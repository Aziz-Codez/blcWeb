import { Typography } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Content6 = () => {
    const { t } = useTranslation();
    
    return (
        <Fragment>
        <Typography variant="h6" paragraph>
          {t("Blog.Content6.1")}
        </Typography>
        <Typography variant="h6" paragraph>
          {t("Blog.Content6.2")}
        </Typography>
        <Typography variant="h6" paragraph>
          {t("Blog.Content6.3")}
        </Typography>
      </Fragment>
    )
}

export default Content6;
