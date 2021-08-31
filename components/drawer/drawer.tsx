import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import useStyles from "./drawer-styles";
import { useRouter } from "next/router";
import { ItemMenu } from "../../types/types";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Grid,
} from "@material-ui/core";
import {
  FolderOpenOutlined,
  LocationCityOutlined,
  RestoreOutlined,
} from "@material-ui/icons";
import Link from "next/link";
import Footer from "../footer/Footer";

//TODO: Cambiar el boton de Login por uno que muestre Login si no estas logeado/ Perfil si estas logeado

export default function CustomDrawer(props: { content: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h5" noWrap>
            PedidosNow
          </Typography>
          <Button color="inherit" className={classes.loginButton}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.content}
        <div className={classes.footer}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
