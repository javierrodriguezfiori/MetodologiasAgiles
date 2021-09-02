import { Grid, Typography } from "@material-ui/core";
import { chownSync } from "fs";
import React, { useEffect, useState } from "react";
import CardList from "../../components/list/list";
import { firestore } from "../../config";

export default function ListCards() {
  const [comercios, setComercios] = useState([]);

  useEffect(() => {
    getComerciosFromFirestore();
  }, []);

  const getComerciosFromFirestore = async () => {
    const restaurantes = firestore.collection("restaurants")
    const querySnapshot = await restaurantes.where("localidad", "==", "Lomas_de_Zamora").get()
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setComercios(docs);
    console.log(docs);
  };

  return (
    <Grid container justify="center">
      <Typography>Listado de sucursales</Typography>
      <CardList comercios={comercios} />
    </Grid>
  );
}
