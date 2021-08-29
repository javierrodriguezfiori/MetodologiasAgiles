import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardList from "../../components/list/list";
import { firestore } from "../../config";

export default function ListCards() {
  const [comercios, setComercios] = useState([]);

  useEffect(() => {
    getComerciosFromFirestore();
  }, []);

  const getComerciosFromFirestore = async () => {
    setComercios([]);
    const querySnapshot = await firestore.collection("restaurants").get();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setComercios(docs);
  };

  return (
    <Grid container justify="center">
      <Typography>Listado de sucursales o Comidas Como gusten </Typography>
      <CardList comercios={comercios} />
    </Grid>
  );
}
