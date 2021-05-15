import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import { Link as RouterLink } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { array } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));


export default function Chips(props) {
  const classes = useStyles();
  const [chipsData, setchipsData]=useState(props.matreserved);


  const handleDelete = (objectres) => {
    var index = props.matreserved.indexOf(objectres); //Trouve l'indice de objectres dans props.matreserved
    props.matreserved.splice(index, 1); //Supprimer l'objet du tableau d'objets
    props.quantreserved.splice(index,1);
    localStorage.setItem('materiels',JSON.stringify(props.matreserved));
    localStorage.setItem('quantite',JSON.stringify(props.quantreserved));

    setchipsData((chips) => chips.filter((chip) => chip.id !== objectres.id))

  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
    
  };
  const affichage = (obj) => {
    var index =  props.matreserved.indexOf(obj);
    var quant= props.quantreserved[index];
     if (obj == 'Vide'){
      return 'Vide';
    }else {
      return obj.objet +' x'+ quant
    }
  }
  return (
    <div className={classes.root}>
      {chipsData.map((objectres) => 
      
        <Chip label={affichage(objectres)}  onDelete={() => handleDelete(objectres)} color='secondary'/>
      
      )}
      
      <Chip icon={<AddIcon/>} onClick={handleClick} color='primary' 
      component={RouterLink}
        to ='/resa'
      />
    </div>
  );
}