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
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  AccountCircle,
  AccountCircleRounded,
  FolderOpenOutlined,
  LocationCityOutlined,
  RestoreOutlined,
} from "@material-ui/icons";
import Link from "next/link";
import Footer from "../footer/Footer";
import { getMenu } from "../../functions/getMenu";

//TODO: Cambiar el boton de Login por uno que muestre Login si no estas logeado/ Perfil si estas logeado

export default function CustomDrawer(props: { content: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {getMenu().map((item) => (
        <MenuItem onClick={() => router.push(`${item.url}`)}>
          {item.text}
        </MenuItem>
      ))}
    </Menu>
  );

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
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleProfileMenuOpen}
            className={classes.loginButton}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
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
