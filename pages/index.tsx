import React, { useState, useEffect } from 'react'
import CustomDrawer from '../components/drawer/drawer'
import Button from '@material-ui/core/Button'
import { Input, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import useStyles from '../components/drawer/drawer-styles'
import { Locations, LocationsEnumLabels } from '../enums/Locations'

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {

  const [search, setSearch] = useState('');

  const classes = useStyles();

  const submitSearch = (e) => {
    e.preventDefault();
    alert(search);
  };

  return (
    <CustomDrawer
      content={
        <div style={{marginTop: '12rem'}}>
        <div className={classes.container}>
          <Typography style={{textAlign: 'center', marginBottom: '3rem'}} variant="h4">Vola antes de que llegue tu pedido!</Typography>
            <div style={{display: 'flex'}}>
              <Select style={{ width: '100%' }} value="age" onChange={(value: any) => setSearch(value)}>
                {Object.keys(Locations).map( item => 
                  <MenuItem value={LocationsEnumLabels[item]} />)}
              </Select>
            {/* <TextField style={{ width: '100%' }} onChange={(e) => setSearch(e.target.value)} id="outlined-basic" label="Escribi tu dirección" variant="outlined" /> */}
            <Button onClick={(e) => submitSearch(e)} color="secondary" style={{ marginLeft: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }} variant="contained" >Buscar</Button>
            </div>
         </div>
         </div>
      }
    />
  )
}

export default Home;
