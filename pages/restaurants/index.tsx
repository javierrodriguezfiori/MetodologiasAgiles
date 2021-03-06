import {
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import CustomDrawer from "../../components/drawer/drawer";
import useStyles from "../../components/drawer/drawer-styles";
import CardList from "../../components/list/list";
import { firestore } from "../../config";
import FetchService from "../../functions/fetch/FetchService";
import { Restaurante } from "../../models/models";

interface RestaurantsProps {}

const Restaurants: React.FC<RestaurantsProps> = () => {
  const router = useRouter();
  const classes = useStyles();
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [isLoadingRestaurantes, setIsLoadingRestaurantes] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoadingRestaurantes(true);
      let localidad =
        router.query.localidad ||
        new URLSearchParams(window.location.search).get("localidad");
      const response = await FetchService.fetchRestaurantsByLocalidad(
        localidad as string
      );
      setRestaurantes(response);
      setIsLoadingRestaurantes(false);
    };
    fetchRestaurants();
  }, []);

  return (
    <CustomDrawer
      content={
        <>
          <Grid
            container
            direction="row"
            style={{
              padding: "1rem",
              backgroundColor: "#F9F6F4",
              width: "100%",
              minHeight: "100%",
            }}
          >
            <Grid item xs={3}></Grid>
            <Grid container style={{ justifyContent: "center" }} item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Buscar..."
                variant="outlined"
                classes={{ root: classes.textFieldStyles }}
              />
              {isLoadingRestaurantes ? (
                <CircularProgress />
              ) : (
                <CardList comercios={restaurantes} />
              )}
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </>
      }
    />
  );
};

export default Restaurants;
