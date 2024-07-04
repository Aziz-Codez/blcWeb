import { Typography } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Content4 = () => {
    
    const { t } = useTranslation();
   
    return (
      <Fragment>
      <Typography variant="h6" paragraph>
      {t("Blog.Content4")}
      </Typography>
    </Fragment>
    )
}

export default Content4;