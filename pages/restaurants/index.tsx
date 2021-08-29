import { Grid, Paper, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import CustomDrawer from '../../components/drawer/drawer';
import useStyles from '../../components/drawer/drawer-styles';
import { firestore } from '../../config';
import { Restaurante } from '../../models/models';


interface RestaurantsProps{}

const Restaurants: React.FC<RestaurantsProps> = () => {

    const router = useRouter();
    const classes = useStyles();

    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

    useEffect( () => {
        const fetchRestaurants = async () => {
            //let localidad = (router.query.params as string[])['localidad']
            const querySnapshot = await firestore.collection("restaurants").where("localidad","==","Lomas_de_Zamora").get();
            const docs: Restaurante[] = [];
            querySnapshot.docs.forEach(doc => {
                if (doc.exists){
                    docs.push(doc.data() as Restaurante);
                }
            });
            setRestaurantes(docs);
        };
        fetchRestaurants();
    }, []);


    return <CustomDrawer content={<>
    <Grid container className={classes.root} direction="row" spacing={3} style={{padding: '1rem'}}>
        <Grid item xs={3}><Paper>Filtros</Paper></Grid>
        <Grid item xs={6}>
            <TextField style={{ width: '100%'}} variant="outlined" placeholder="Buscar..." />
            {restaurantes.map(rest => <><span>{rest.titulo} {rest.descripcion} </span></>)}
        </Grid>
        <Grid item xs={3}><Paper>Otros filtros</Paper></Grid>
    </Grid>
    </>
    } 
    />
};

export default Restaurants;