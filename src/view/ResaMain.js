import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Box, colors, Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch, useParams} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DisplayIcon from '@material-ui/icons/Computer';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlaceIcon from '@material-ui/icons/Place';
import WikiIcon from '@material-ui/icons/Language';
import DocumentIcon from '@material-ui/icons/InsertDriveFile';
import Image from '../assets/image/Reservation2.jpg';
import Stepper from './OutilResa/Stepper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import userWantsDarkMode from "./App"
import { Block } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Reservation from "./Reservation.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { red } from "@material-ui/core/colors";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';






const useStyles = makeStyles((theme) =>
	({

	    CadreGrille: {
	      position: 'relative',
	      backgroundColor: '#FFC0CB',
	      height : '500px',
	      overflow: 'hidden'

	    },

	    CadreButton : {   
	      backgroundColor: '#FFFFFF',
	      //height : '60px',
	      position: 'relative',
	      //display piur que les boutons soient alignés
	      display:'inline-block',

	      textAlign: 'center',
	      margin: theme.spacing(1),
	      //borderStyle : 'solid ',
	      width:'200px',
        height :'80px'
	        
	      
	    },

	    CadreFiltre: {
	            postion:'relative',
	            backgroundColor :'#07700f',
	            height : '120px'

	    },

	    root: {
	      display: 'flex',
	      flexWrap: 'wrap',
	      justifyContent: 'space-around',
	      overflow: 'hidden',
	      backgroundColor: '#FFC0CB',
	    },

	    gridList: {
	      width: 900,
	      height: 500,
	    },


  })

);

//constante qui remplace temporairement les données du backend 
export const materiels = [
  { objet: 'ballon', type :'divertissement',description :'voici une description',Assos :'A',statue :'true',caution :'50',quantiteMax: '3', id:'1' },
  { objet: 'jeuvidéo', type :'divertissement',description :'voici une description',Assos :'B',statue :'true',caution :'50',quantiteMax: '3', id:'2' },
  { objet: 'ps5', type :'divertissement',description :'voici une description',Assos :'B',statue :'true',caution :'50',quantiteMax: '3', id:'3' },
  { objet: 'Crepière', type : 'electromenager',description :'voici une description',Assos :'A',statue :'true',caution :'50',quantiteMax: '3', id:'4' },
  { objet: 'lave-vaisselle', type : 'electromenager',description :'voici une description',Assos :'A',statue :'true',caution :'50',quantiteMax: '3', id:'5' },
  { objet: 'table', type :'autre',description :'voici une description',Assos :'B',statue :'true',caution :'50',quantiteMax: '3', id:'6' },
  { objet: 'Amphis', type : 'salle',description :'voici une description',Assos :'A',statue :'true',caution :'50',quantiteMax: '3', id:'7' },
  { objet: 'ballon', type :'divertissement',description :'voici une description',Assos :'D',statue :'true',caution :'50',quantiteMax: '3', id:'8' },
  { objet: 'jeuvidéo', type :'divertissement',description :'voici une description',Assos :'A',statue :'true',caution :'50',quantiteMax: '3', id:'9' },
  { objet: 'ps5', type :'divertissement',description :'voici une description',Assos :'A',statue :'true',caution :'50',quantiteMax: '3', id:'10' },
  { objet: 'Crepière', type : 'electromenager',description :'voici une description',Assos :'R',statue :'true',caution :'50',quantiteMax: '3', id:'11' },
  { objet: 'lave-vaisselle', type : 'electromenager',description :'voici une description',Assos :'Q',statue :'true',caution :'50',quantiteMax: '3', id:'12' },
  { objet: 'table', type :'autre',description :'voici une description',Assos :'A',statue :'true',caution :'50',quantiteMax: '3', id:'13' },
  { objet: 'Amphis', type : 'salle',description :'voici une description',Assos :'Z',statue :'true',caution :'50',quantiteMax: '3', id:'14' },

];


function DefMateriel(props){
  return <h1>{props.name}</h1>
}


function decomp2D(tab){

  var matligne = new Array();
  for (let i=0; i<(tab.length)/4; i++){
   var taille = Math.min(4,(tab.length-i*4)); 
    matligne[i]= new Array();
    for (let j =0; j<taille; j++){
        matligne[i][j]=tab[i*4+j]  ;    
    }

  }
  return matligne;
}
  /*Cette fonction nous permet de créer un bouton pour chaque élément de la liste matériel 
Les boutons sont aussi filtrés selon le type et aussi ce que l'on tape dans la barre de recherche
De plus, cette fonction met aussi en place du scrolling des boutons (on place les objets dans une 
  matrice de 4 colonne pour pouvoir mettre 4 boutons par lignes)
*/
function Materiel(props){
  console.log("oui");
  const classes = useStyles("");
  
  let a= materiels.filter((mat) => {
    if ((mat.type=='divertissement' && props.boxes.checkedA==true) ||
      (mat.type=='electromenager' && props.boxes.checkedB==true) ||
      (mat.type=='autre' && props.boxes.checkedD==true) ||
      (mat.type=='salle' && props.boxes.checkedC==true) ||
      (props.boxes.checkedD==false && props.boxes.checkedA==false && props.boxes.checkedB==false && props.boxes.checkedC==false)
      ){
        if (mat.objet.toString().toLowerCase().includes(props.research.toString().toLowerCase())){
          return mat;
        }
      }
  })

  let matligne = decomp2D(a) ;
  const listmat = matligne.map((matlignei) => 
   <GridListTile>

    {matlignei.map((materiel) =>

    <Button 
      className = {classes.CadreButton}
      component={RouterLink} 
      to={"/resa/Reservation/"+materiel.id  }   
    > 
      <h1>{materiel.objet}</h1>

    </Button>

    )}
    </GridListTile>
  );
  return(
    <div  >
      {listmat}
    </div>
  );
}




function ResaMain(){
	const classes = useStyles("");
	const [searchMat, setSearchMat] = useState(""); //Declaration of Hook for search bar filter
  	const [boxstate, setBoxState] = React.useState({ //Declaration of Hook for checkbox filter
    	checkedA: false,
    	checkedB: false,
    	checkedC: false,
    	checkedD: false,
  });
  const handleChange = (event) => {
    setBoxState({ ...boxstate, [event.target.name]: event.target.checked });
  }; //checkbox handler 
  return(  

        <Container maxWidth ="lg" fixed >
          <Container maxWidth ="lg" fixed >
        {/*on fait appelle à la fonction stepper qui met en place un stepper qui explique à l'utilisateur les étapes pour faire une réservation  */}
            <Stepper/>
          }
          </Container>
          <Container maxWidth ="lg" fixed>
            <div className={classes.CadreFiltre}>
              <Autocomplete  //Component for search bar scroller
                id="combo-box-demo"
                options={materiels}
                getOptionLabel={(option) => option.objet}
                // problème backgroundcolor du cadre en passant au dark mode
                style={{width : '40%', backgroundColor : userWantsDarkMode ? '#ffffff' : '#000000', marginLeft: '35%' }} 
                renderInput={(params) => 
                  <TextField {...params} label="Rechercher un matériel..." variant="outlined" onChange={(event) => {
                  setSearchMat(event.target.value) //Search bar 
                }}/>}       
                
              />
              <FormControlLabel  //Component for labeling checkboxes
                control={
                  <Checkbox
                    checked= {boxstate.checkedA}
                    onChange={handleChange}

                    name="checkedA"
                    color="primary"
                    
                  />
                }
                label="Divertissement"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked= {boxstate.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color="primary"
                  />
                }
                label="Salles"
              />  
              <FormControlLabel
                control={
                  <Checkbox
                    checked= {boxstate.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Electroménager"
              />
              <FormControlLabel
                control={
                  <Checkbox                    
                    checked= {boxstate.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    color="primary"
                  />
                }
                label="Autres"
              />

            </div>
          </Container>

          <Container maxWidth ="lg" fixed >
            <div className={classes.root}>
          
                {/* Gridlist enables us to align the buttons and order them*/}
              <GridList cellHeight={'auto'} spacing={1} className={classes.gridList} cols={3} rowHeight={164}>
                <Materiel research={searchMat} boxes={boxstate} />   
              </GridList>   
                 
            </div>
           
          </Container>


          {/*en bas du container on met en place un bouton de redirection qui 
          réfère la fonction Reservation grâce au path resa/Resaervation*/}
          <Button
          component={RouterLink}
          to="/resa/Panier"
          variant="contained"
          color="primary"
          className={classes.button}
          >
            Voir ton Panier 
          </Button>      
        </Container>
  )
}

export default ResaMain;
