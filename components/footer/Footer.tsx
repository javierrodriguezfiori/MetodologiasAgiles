import {
  BottomNavigation,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <Box bgcolor="#E63939" color="white">
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box>Quienes somos</Box>
              <Box>Terminos y Condiciones</Box>
              <Box>Privacidad</Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>Top comidas</Box>
              <Box>Top restaurantes</Box>
              <Box>Top vendedores</Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>Registra tu negocio</Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>Acuerdos corporativos</Box>
            </Grid>
          </Grid>
        </Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="subtitle1"
              color="initial"
              style={{
                paddingTop: "0.9rem",
                fontWeight: 400,
                fontSize: "0.9rem",
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
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
