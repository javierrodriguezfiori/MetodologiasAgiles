import { BottomNavigation, Typography } from "@material-ui/core";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <BottomNavigation showLabels style={{ backgroundColor: "#E63939" }}>
        <Typography
          variant="subtitle1"
          color="initial"
          style={{
            paddingTop: "0.9rem",
            color: "white",
            fontWeight: 400,
            fontSize: "1.1rem",
          }}
        >
          Copyright © 2021{" "}
          <a
            target="_blank"
            href="https://github.com/javierrodriguezfiori/MetodologiasAgiles"
          >
            Pedidos Unla
          </a>
          . All Rights Reserved.
        </Typography>
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
