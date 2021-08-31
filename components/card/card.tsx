import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {  orange} from '@material-ui/core/colors';

import { Grid } from '@material-ui/core';


  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

interface props {
    url: string
    titulo: string 
    descripcion: string
}

export default function ItemCard({url,titulo,descripcion}:props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container justify="center">
    <Card  className={classes.root}>
      <CardHeader
        title={titulo}
      />
      {'peito'}
      <CardMedia
        className={classes.media}
        image={url}
        title={titulo}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    </Grid>
  );
}

