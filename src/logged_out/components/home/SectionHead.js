import React, { Fragment } from "react";
import { Typography, Grid, Box } from "@mui/material";
import "./SectionHead.css";

function SectionHead() {
    return (
      <Fragment>
        <div className="wrapper lg-p-top" style={{ backgroundImage: `url("./images/header.svg")`}}>
            <div className="container-fluid">
              <Box display="flex" flexDirection="column" justifyContent="left" marginTop="-2%" marginBottom="20%" className="row" >
                <Grid  style={{backgroundColor:"transparent"}} sx={{ boxShadow: 0 }}>
                  <div className="container" style={{marginBottom:"10%"}}>
                    <img src="./images/blc-logo.png" className="head-logo" alt=""/>
                    <Box >
                      <Grid item xs={12} md={5} >
                        <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                        >
                          <Box mb={4}>
                            <Typography variant= "h3" color="white">
                              Better Life Communication
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Box>
                  </div>
                </Grid>
              </Box>    
            </div>
        </div>
      </Fragment>
    );
};

export default SectionHead;