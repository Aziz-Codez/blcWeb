import React, {useEffect} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import { Box, Grid, Typography } from "@mui/material";
import "./rd.css";
import { useTranslation } from 'react-i18next';

const styles = (theme) => ({
    wrapper: {
      minHeight:"60vh",
      width: "100%",
      alignItems:"center",
      display:"flex",
      flexDirection:"column",
      [theme.breakpoints.up('xl')]: {
        paddingTop: `${theme.spacing(25)} !important`
      },
    },
    container: {
        display:"flex",
        backgroundColor:"white",
        marginBottom: theme.spacing(8),
        width: "100%",
        boxShadow: theme.shadows[6]
    },
    container2: {
        display:"flex",
        backgroundColor:"white",
        marginBottom: theme.spacing(8),
        width: "100%",
    }
  });

function RD(props) {
    
    const { t } = useTranslation();
    
    const { selectRD } = props;
    useEffect(() => {
        selectRD();
    }, [selectRD]);

    const {classes} = props;

    return(
        <div className={classNames("lg-p-top", classes.wrapper)}>
            <Grid container style={{justifyContent:"center",marginBottom:"3%",marginTop:"-5%", flexDirection:"column"}}>
                <Typography variant="h3" fontWeight={500} color="#33383b"  textAlign="center">
                    AYPOS
                </Typography>
                <Typography variant="h6" fontWeight={500} color="#33383b"  textAlign="center" marginTop="2%">
                    {t("ai.supported")}
                </Typography>
                <Typography variant="h7" fontWeight={700} color="#33383b"  textAlign="center" marginTop="1%">
                    ( {t("VMware and Türk Telekom support for the project")} )
                </Typography>
            </Grid>
            <div className={classes.container}>
                <Grid container style={{marginTop:"2%", marginBottom:"2%"}}>
                    <Grid item lg={4} md={5} style={{display:"flex",flexDirection:"column"}}>
                        <Box style={{marginLeft:"30%"}}>
                            <img src="./images/aypos/datacenters.png" height="auto" width="60%" alt="" />
                        </Box>
                        <Typography variant="h7" fontWeight={500} color="#33383b"  textAlign="center">
                            {t("around 7.2 million data centers in the world")}
                        </Typography>
                    </Grid>
                    <Grid item lg={8} md={7}>
                        <Box style={{marginLeft:"10%",marginTop:"2%"}}>
                            <Typography variant="h5" fontWeight={500} color="#33383b"  textAlign="left">
                                Problem
                            </Typography>
                            <ul>
                                <li>{t("Global Energy Consumption")}</li>
                                <li>{t("Energy cons")} </li>
                                <li>{t("The share of cloud")}</li>
                                <li>{t("The share of edge")}</li>
                                {t("In Turkey:")}
                                <li>{t("An operator 2022")}</li>
                                <li>{t("Electric cost")}</li>
                                <li>{t("Not all data centers")}</li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.container}>
                <Grid container style={{marginTop:"2%", marginBottom:"2%"}}>
                    <Grid item lg={4} md={5} style={{display:"flex",flexDirection:"column"}}>
                        <Box >
                            <img src="./images/aypos/ai+big.png" height="auto" width="100%" alt="" />
                        </Box>
                    </Grid>
                    <Grid item lg={8} md={7} >
                        <Box style={{margin:"auto",maxWidth:"70%",marginTop:"8%"}}>
                            <Typography variant="h4" fontWeight={500} color="#33383b"  textAlign="center">
                                {t("AYPOS")}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.container2} style={{}}>
                <Grid container style={{justifyContent:"center"}}>
                        <img style={{}} src="./images/aypos/teydeb.jpeg" className="teydeb" alt="" />
                   
                </Grid>
            </div>
        </div>
    )
};

RD.propTypes = {
    classes: PropTypes.object.isRequired,
    selectRD: PropTypes.func.isRequired,
  };

export default withStyles(styles, { withTheme: true })(RD);