import React, { useState, useEffect } from 'react'
import CustomDrawer from '../components/drawer/drawer'
import Button from '@material-ui/core/Button'
import { Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import useStyles from '../components/drawer/drawer-styles'
import { Locations, LocationsEnumLabels } from '../enums/Locations'
import { useRouter } from 'next/router'

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {

  const [search, setSearch] = useState('');
  const router = useRouter()

  const handleChange = (event) => {
    setSearch(event.target.value)
  };

  const classes = useStyles();

  const submitSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/restaurants",
      query: { localidad: search }
    })
  };

  return (
    <CustomDrawer
      content={
        <div className={classes.container} >
          <div className={classes.homeSearch}>
          <Typography style={{textAlign: 'center', color: 'white', font: 'Helvetica'}} variant="h4">¡Volá antes de que llegue tu pedido!</Typography>
            <div style={{display: 'flex'}}>
              <Select variant="outlined" style={{ width: '100%', backgroundColor: '#FFF'}} value={search} onChange={handleChange}>
                {Object.values(Locations).map((item) => 
                  <MenuItem key={item} value={Locations[item as string]}>
                    {LocationsEnumLabels[item]}
                  </MenuItem>)}
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
