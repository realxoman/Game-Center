import React from "react";
import { footerStyle } from "./style";
import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
const Footer = () => {
  const classes = footerStyle();
  return (
    <footer className={classes.footer}>
      <Box className={classes.container}  style={{ flexWrap: "wrap"}}>
        <Box className={classes.LeftFooter}>
          <h2>about us</h2>
          <Typography>something</Typography>
        </Box>
        <Box className={classes.centerFooter}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <PlaceIcon />
            <Typography>Tehran, Iran</Typography>
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <LocalPhoneIcon />
            <Typography>+989055130988</Typography>ّ
          </Box>
        </Box>
        <Box className={classes.RightFooter}>
          <Link href="https://www.linkedin.com/in/nafiseamiri/" target="_blank">
            <GitHubIcon style={{ color: "black" }} />
          </Link>
          <Link href="https://github.com/nafisamiri" target="_blank">
            <LinkedInIcon style={{ color: "black" }} />
          </Link>
          <Link href="mailto:nafiseamiriemami@gmail.com" target="_blank">
            <MailIcon style={{ color: "black" }} />
          </Link>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
