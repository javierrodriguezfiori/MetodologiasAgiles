import { useEffect, useState } from "react";
import { firestore } from "../../config";
import Card from "../../components/card/card";
import { Item } from "../../types/types";
import { Grid } from "@material-ui/core";

export default function CardList() {
  const [comercios, setComercios] = useState([]);

  useEffect(() => {
    getComerciosFromFirestore();
  }, []);

  const getComerciosFromFirestore = async () => {
      setComercios([]);
    const querySnapshot = await firestore.collection("restaurants").get();
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({...doc.data(),id:doc.id})
    });
    setComercios(docs);
  };

  return (
    <>
      {comercios.map((rest) => (
        <Card
          key={rest.id}
          url={rest.url}
          titulo={rest.titulo}
          descripcion={rest.descripcion}
        />
      ))}
    </>
  );
}
