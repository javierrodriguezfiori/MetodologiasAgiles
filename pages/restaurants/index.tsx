import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import CustomDrawer from '../../components/drawer/drawer';


interface RestaurantsProps{}

const Restaurants: React.FC<RestaurantsProps> = () => {

    const router = useRouter();
    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

    useEffect( () => {
        const fetchRestaurants = () => {
        console.log(router.query);
        };
        fetchRestaurants();
    });


    return <CustomDrawer content={<>
    Restaurants View
    </>
    } 
    />
};

export default Restaurants;