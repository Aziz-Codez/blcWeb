import { Typography } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Content5 = () => {
    const { t } = useTranslation();
    
    return (
        <Fragment>
        <Typography variant="h6" paragraph>
          {t("Blog.Content5.1")}
        </Typography>
        <Typography variant="h6" paragraph>
          {t("Blog.Content5.2")}
        </Typography>
        <Typography variant="h6" paragraph>
          {t("Blog.Content5.3")}
        </Typography>
      </Fragment>
    )
}

export default Content5;
