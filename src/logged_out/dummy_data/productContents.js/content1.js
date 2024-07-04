import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import ZoomImage from "../../../shared/components/ZoomImage";
import { useTranslation } from "react-i18next";

const Content = () => {

    const { t } = useTranslation();
    
    return (
        <Fragment>
        <Typography variant="h6" paragraph>
            {t("Product.SnippetInfrastructure1")}     
        </Typography>

        <Typography variant="h6" paragraph>
            IAAS Management 
            <Typography fontSize={20}>
            OpenStack
            </Typography>      
        </Typography>
    
        <Typography variant="h6" paragraph>
            MANO
            <Typography fontSize={20}>
            Tacker/ OSM / ONAP / etc.
            </Typography>
        </Typography>
    
        <Typography variant="h6" paragraph>
            Network
            <Typography fontSize={20}>
            Legacy HW + SDN Overlay
            </Typography>
            <Typography>
            SDN – Neutron
            </Typography>
            <Typography>
            LB – LoadBalancing
            </Typography>
            <Typography>
            DNS – Designate 
            </Typography>
        </Typography>
    
        <Typography variant="h6" paragraph>
            Compute
            <Typography fontSize={20}>
            Commodutiy HW (X86)
            </Typography>
            <Typography>
            Virtual Machines- NOVA
            </Typography>
            <Typography>
            Containerized - Zun
            </Typography>
        </Typography>
    
        <Typography variant="h6" paragraph>
            Storage
            <Typography fontSize={20}>
            SD-Storage / I-SCSI / NFS
            </Typography>
            <Typography>
            Object (S3) – Swift
            </Typography>
            <Typography>
            Block – Cinder
            </Typography>
            <Typography>
            File – Manila
            </Typography>
        </Typography>
        <Box style={{ textAlign:"center" }}>
            <Hidden smDown>
            <ZoomImage src="../../images/products/horizon.png"  width="50%" height="auto" alt="blc-cloud" />
            </Hidden>
            <Hidden smUp>
            <ZoomImage src="../../images/products/horizon.png"  width="100%" height="auto" alt="blc-cloud" />
            </Hidden>
        </Box>
        </Fragment>
    )
}

export default Content;
