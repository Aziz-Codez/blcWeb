import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import { useTranslation } from "react-i18next";
import flagTurkey from "./flags/turkey.svg";
import flagEngland from "./flags/uk.svg";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[4],
    backgroundColor: "#0E2A47",
    zIndex:999,
    position:"absolute"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  logo:{
    width:"120px",
    marginLeft:"15%", 
    marginTop:"5%"
  },
  flags:{
    marginBottom:"-2%"
  }
});

function NavBar(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  };
   
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;

  const menuItems = [
    {
      link: "/",
      name: "Home", 
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/products",
      name: "Products",
      icon: <CategoryIcon className="text-white" />,
    },
    {
      link: "/r&d",
      name: "R&D",
      icon: <Inventory2Icon className="text-white" />,
    },
    {
      link: "/news",
      name: "News",
      icon: <NewspaperIcon className="text-white" />,
    },   
    {
      link: "/about",
      name: "About Us",
      icon: <InfoIcon className="text-white" />,
    }
  ];
  return (
    <div className={classes.root} >
       
      <AppBar position="sticky"  className={classes.appBar}>
        <Toolbar className={classes.toolbar} >
        
          <div>
            <a href="/">
            <img className={classes.logo} src="/images/navbar-logo2.png" alt="blc-logo"/>
            
            </a>
          </div>
          <div style={{marginRight:"3%"}}>
            
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            
            <Hidden mdDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        <Typography color="white">
                        {t(element.name)}
                        </Typography>
                      </Button>
                    </Link>
                  );
                  
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            <img alt="" className={classes.flags} src={flagTurkey} width="40" height="30" onClick={() => changeLanguage('tr')}/> 
            <img alt="" className={classes.flags} src={flagEngland}  width="40" height="30"  onClick={() => changeLanguage('en')}/>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
