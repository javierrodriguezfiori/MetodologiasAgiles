import React from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

export const getMenu = () => {
  const notLoggedMenu = [
    {
      text: "Login",
      url: "/login",
    },
    {
      text: "Registrarse",
      url: "/register",
    },
  ];

  const loggedInMenu = [
    {
      text: "Perfil",
      icon: <AccountCircleRoundedIcon />,
      url: "/",
    },
  ];

  // if (typeof window !== "undefined") {
  //   const userTypeAux = sessionStorage.getItem("userType");

  //   return userTypeAux
  //     ? userTypeAux === "docente"
  //       ? loggedInMenu
  //       : studentMenu
  //     : notLoggedMenu;
  // }

  return notLoggedMenu;
};
