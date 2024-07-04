import { Typography, Box } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import ZoomImage from "../../../shared/components/ZoomImage";
import { useTranslation } from "react-i18next";

const Content4 = () => {
    
    const { t } = useTranslation();
    
    return (
      <Fragment>
        <Typography variant="h7" paragraph>
        {t("Product.Content4.withTheTask")} 
        </Typography>
        <Typography variant="h7" paragraph>
        {t("Product.Content4.theTask")} 
        </Typography>
        <Typography variant="subtitle2" paragraph> 
          {t("Product.Content4.advantages")} 
          <ul>
            <li>{t("Product.Content4.RealTime")} </li>
            <li>{t("Product.Content4.MoreEfficient")} </li>
            <li>{t("Product.Content4.Detection")} </li>
            <li>{t("Product.Content4.MoreEffective")} </li>
            <li>{t("Product.Content4.Effective")} </li>
            <li>{t("Product.Content4.Inventory")} </li>
            <li>{t("Product.Content4.DetectionAnd")} </li>
            <li>{t("Product.Content4.Recording")} </li>
            <li>{t("Product.Content4.QR")} </li>
            <li>{t("Product.Content4.Personnel")} </li>
          </ul>
        </Typography>
        <Box className="taskImg">
            <ZoomImage src="../../images/taskTracking/map.png" className="ptsimg" alt=""/>
            <ZoomImage src="../../images/taskTracking/livemonitor.png" className="ptsimg" alt=""/>
        </Box>
          <ul>
            <li>{t("Product.Content4.ItContributes")}</li>
            <li>{t("Product.Content4.Ifthe")}</li>
            <li>{t("Product.Content4.ItIs")}</li>
            <li>{t("Product.Content4.Special")}</li>
            <li>{t("Product.Content4.InventoryTracking")}</li>
          </ul>
      </Fragment>
    )
}

export default Content4;