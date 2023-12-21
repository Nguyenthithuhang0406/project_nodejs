// eslint-disable-next-line no-unused-vars
import React from "react";
import { SFooter } from "./style";
import { Typography } from "antd";

const Footer = () => {
  return (
    <SFooter>
        <Typography
        style={{
            color: "#c82525",
        }}
        >
            Copyright @ 2023 Web74
        </Typography>
    </SFooter>
  );
};

export default Footer;