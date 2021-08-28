import { CardActions } from '@material-ui/core'
import React, { useState } from 'react'
import Card from '../../components/card/card'
import CustomDrawer from '../../components/drawer/drawer'
import { ItemMenu } from '../../types/types'
import CardList from '../../components/list/list'

export default function ListCards() {

    return (
        <div>
            {/* <Card url={'https://firebasestorage.googleapis.com/v0/b/pedidosnow-276a6.appspot.com/o/Captura.JPG?alt=media&token=f067190a-b0e1-4378-a6f4-a1e0eb907537'} titulo={'Paella con camarones'} descripcion={'Comida española con arroz y calamares'}/> */}
            <CardList />
        </div>
    )
}
