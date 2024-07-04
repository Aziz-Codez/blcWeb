import React, {useRef} from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
//import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import useMediaQuery from "@mui/material/useMediaQuery";
import RoomIcon from '@mui/icons-material/Room';
import emailjs from '@emailjs/browser';
import './footer.css';
import { useTranslation } from "react-i18next";

const styles = (theme) => ({
  footerInner: {
    backgroundColor: "#0E2A47",
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(0),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
  },
  infoIcon: {
    color: `#0E2A47 !important`,
    backgroundColor: "white !important",
    border:"2px solid white",
    "&:hover": {
        color: `white !important`,
        backgroundColor: `#0E2A47!important`,
    },
  },
  socialIcon: {
    fill: "#0E2A47",
    backgroundColor: "white",
    border:"2px solid white",
    "&:hover": {
      fill: "white",
      backgroundColor: "#0E2A47",
    },
  },
  footerHeight: {
    marginTop:"-8%",
    [theme.breakpoints.up('xl')]: {
      marginTop: "-2%"
    },
  }
});

const infos = [
  {
    icon: <RoomIcon />,
    description: "center",
    href:"https://goo.gl/maps/nTAhkfSjgA7b9vkR7"
  },
  // {
  //   icon: <PhoneIcon />,
  //   description: "+90 507 750 00 41",
  //   href:"tel:+905077500041"
  // },
  {
    icon: <MailIcon />,
    description: "info@blc-css.com",
    href:"mailto:info@blc-css.com"
  },
];

const socialIcons = [
    {
        icon: (
        <svg
            role="img"
            width="24px"
            height="24px"
            viewBox="17 17 30 30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Instagram</title>
            <path d="M 39.88,25.89 C 40.86,25.89 41.65,25.10 41.65,24.12 41.65,23.14 40.86,22.35 39.88,22.35 38.90,22.35 38.11,23.14 38.11,24.12 38.11,25.10 38.90,25.89 39.88,25.89 Z M 32.00,24.42 C 27.82,24.42 24.42,27.81 24.42,32.00 24.42,36.19 27.82,39.58 32.00,39.58 36.18,39.58 39.58,36.18 39.58,32.00 39.58,27.82 36.18,24.42 32.00,24.42 Z M 32.00,36.92 C 29.28,36.92 27.08,34.72 27.08,32.00 27.08,29.28 29.28,27.08 32.00,27.08 34.72,27.08 36.92,29.28 36.92,32.00 36.92,34.72 34.72,36.92 32.00,36.92 Z M 32.00,19.90 C 35.94,19.90 36.41,19.92 37.96,19.99 39.41,20.05 40.19,20.29 40.71,20.50 41.40,20.77 41.89,21.08 42.41,21.60 42.92,22.12 43.24,22.61 43.51,23.30 43.71,23.82 43.95,24.60 44.02,26.04 44.09,27.60 44.11,28.06 44.11,32.01 44.11,35.95 44.09,36.41 44.02,37.97 43.95,39.41 43.71,40.19 43.51,40.71 43.24,41.40 42.92,41.90 42.41,42.41 41.89,42.93 41.40,43.25 40.71,43.51 40.19,43.71 39.41,43.96 37.96,44.02 36.41,44.09 35.94,44.11 32.00,44.11 28.06,44.11 27.59,44.09 26.04,44.02 24.59,43.96 23.81,43.72 23.29,43.51 22.60,43.24 22.11,42.93 21.59,42.41 21.08,41.90 20.76,41.40 20.49,40.71 20.29,40.19 20.05,39.41 19.98,37.97 19.91,36.41 19.89,35.95 19.89,32.01 19.89,28.06 19.91,27.60 19.98,26.04 20.05,24.60 20.29,23.82 20.49,23.30 20.76,22.61 21.08,22.12 21.59,21.60 22.11,21.08 22.60,20.76 23.29,20.50 23.81,20.30 24.59,20.05 26.04,19.99 27.59,19.91 28.06,19.90 32.00,19.90 Z M 32.00,17.24 C 27.99,17.24 27.49,17.26 25.91,17.33 24.34,17.40 23.27,17.65 22.33,18.01 21.36,18.39 20.54,18.90 19.72,19.72 18.90,20.54 18.39,21.37 18.01,22.33 17.65,23.27 17.40,24.34 17.33,25.92 17.26,27.49 17.24,27.99 17.24,32.00 17.24,36.01 17.26,36.51 17.33,38.09 17.40,39.66 17.65,40.73 18.01,41.67 18.39,42.65 18.90,43.47 19.72,44.29 20.54,45.11 21.37,45.61 22.33,45.99 23.27,46.36 24.34,46.61 25.92,46.68 27.49,46.75 27.99,46.77 32.01,46.77 36.02,46.77 36.52,46.75 38.09,46.68 39.66,46.61 40.74,46.36 41.68,45.99 42.65,45.62 43.47,45.11 44.29,44.29 45.11,43.47 45.62,42.64 46.00,41.67 46.36,40.74 46.61,39.66 46.68,38.09 46.75,36.51 46.77,36.01 46.77,32.00 46.77,27.99 46.75,27.49 46.68,25.91 46.61,24.34 46.36,23.27 46.00,22.33 45.62,21.35 45.11,20.53 44.29,19.71 43.47,18.89 42.65,18.39 41.68,18.01 40.74,17.64 39.67,17.39 38.09,17.32 36.51,17.26 36.01,17.24 32.00,17.24 Z" />
        </svg>
        ),
        label: "Instagram",
        href: "https://www.instagram.com/blc_css/?igshid=YmMyMTA2M2Y%3D",
        description:"blc-css"
    },
    {
        icon: (
        <svg
            role="img"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        ),
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/blc-ileti%C5%9Fim-ve-g%C3%BCvenlik-sistemleri/",
        description:"blc-iletişim-ve-güvenlik-sistemleri"
    }
];

function Footer2(props) {
  const { t } = useTranslation();
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const form = useRef();
  //aylık bazda 200 email sınırı var ücretsiz için!
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_s5ipr2t', 'template_ekj887n', form.current, 'OGJQJ-CoEkBSBaryT')
      .then(() => {
          alert(t("message"))
      }, () => {
          alert("Something went wrong. Please try again later!")
      });
      e.target.reset()
  };

  return (
    <footer className="lg-p-top">
      <div className={classes.footerInner}>
        <Grid container spacing={isWidthUpMd ? 10 : 5} className={classes.footerHeight}>
            <Grid item xs={12} md={6} lg={4.5}>
                <Box justifyContent="center">
                {/* <iframe id="1"title="moment" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.7457176745133!2d32.74233047670673!3d39.96943757151506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3491686d65603%3A0xa97c354078b22e97!2sOstim%20Teknopark%20Turkuaz%20Bina!5e0!3m2!1str!2str!4v1714653272929!5m2!1str!2str" width="100%" height="220px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   */}
                </Box>
                <Box display="flex"  justifyContent="space-evenly"  flexDirection="row">
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h7" color="white">
                    {t("office")}  
                    </Typography>
                  </Box>
                  <Box display="flex" textAlign="right" flexDirection="column">
                    <Typography variant="h7" color="white">
                    4995 Sokak no:3 Alacaatli Mahallesi Daire no:A2
                    </Typography>
                    <Typography variant="h7" color="white">
                    06810 Cankaya/Ankara
                    </Typography>
                  </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3.5}>
              <Box display="flex" flexDirection="column">
                <div>
                  {infos.map((info, index) => (
                    <Box display="flex" mb={2} key={index}>
                      <Box mr={2}>
                        <IconButton
                          aria-label={info.description}
                          className={classes.infoIcon}
                          size="medium"
                          href={info.href}
                        >
                          {info.icon}
                        </IconButton>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Typography variant="h7" className="text-white">
                          {t(info.description)}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                  {socialIcons.map((socialIcon, index) => (
                    <Box display="flex" mb={2} key={index}>
                      <Box mr={2}>
                        <IconButton
                        aria-label={socialIcon.label}
                        className={classes.socialIcon}
                        href={socialIcon.href}
                        size="medium"
                        >
                          {socialIcon.icon}
                        </IconButton>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Typography variant="h7" className="text-white">
                          {socialIcon.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Box display="flex" flexDirection="column">
                    <form action="" className="demo-form1" ref={form} onSubmit={sendEmail} >
                        <div className="input-wrap">
                            <input className="input-wrap-name-mail" type="text" placeholder={t("Name or Company")} name="user_name" />
                        </div>
                        <div className="input-wrap">
                            <input className="input-wrap-name-mail" type="email" placeholder="Email" name="user_email" />
                        </div>
                        <div className="input-wrap">
                            <textarea style={{resize:"none"}} name="message" placeholder={t("Get in Touch")} />
                        </div>
                        <input type="submit" value={t("Send")} />
                    </form > 
                </Box>
            </Grid>
        </Grid>
        <Typography className="rights" fontSize={12}> {t("copyright")} {new Date().getFullYear()} - {t("BLC")}</Typography>
      </div>
    </footer>
  );
}

Footer2.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer2);