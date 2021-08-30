import { Grid, Paper, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import CustomDrawer from '../../components/drawer/drawer';
import useStyles from '../../components/drawer/drawer-styles';
import CardList from '../../components/list/list';
import { firestore } from '../../config';
import { Restaurante } from '../../models/models';

interface RestaurantsProps{}

const Restaurants: React.FC<RestaurantsProps> = () => {
    const router = useRouter();
    const classes = useStyles();
    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

    useEffect( () => {
        const fetchRestaurants = async () => {
            let localidad = router.query.localidad
            const querySnapshot = await firestore.collection("restaurants").where("localidad","==",localidad).get();
            const docs = [];
            querySnapshot.forEach((doc) => {
                if (doc.exists){
                    docs.push({...doc.data(), id: doc.id});
                }
            });
            setRestaurantes(docs);
        };
        fetchRestaurants();
    }, []);

    return <CustomDrawer content={<>
    <Grid container className={classes.root} direction="row" spacing={3} style={{padding: '1rem', backgroundColor: '#F9F6F4'}}>
        <Grid item xs={3}></Grid>
        <Grid container item xs={6} >
            <CardList comercios={restaurantes} />
        </Grid>
        <Grid item xs={3}></Grid>
    </Grid>
    </>
    } 
    />
};

export default Restaurants;