import React from 'react';
import {Link} from "react-router-dom";
import {Switch, Box, Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DisplayIcon from '@material-ui/icons/Computer';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlaceIcon from '@material-ui/icons/Place';
import WikiIcon from '@material-ui/icons/Language';
import DocumentIcon from '@material-ui/icons/InsertDriveFile';

import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const nom = 'Crêpière';
const description = "Crêpière classique pour faire réchauffer des crêpes. Dimension 40 x 12 cm. Attention le câcle d'alimentation se décroche un peu";
const type = 'Electromenager';
const assos = 'Carnaval Humanitaire';
const statut = true;
const caution = 50;


const useStyles = makeStyles((theme) =>
	({
		

		CadreSousTitre:{
			position:'relative',
			marginTop:theme.spacing(3),
			backgroundColor:'#4888EA',
			width: '75%',
			height: '100px',
			margin: 'auto',
    	},

    	SousTitre:{
    		position:'relative',
			top:'25%',
	    	fontSize:'28px',
	    	fontWeight:'bold',
	    	color: 'white',
	    	textAlign:'center',
	    	lineHeight: '1.5',
    	},

		CadreExterieur:{
			position:'relative',
			marginTop:theme.spacing(3),
			backgroundColor:'#D3E6F0',
			width: '100%',
			margin: 'auto',
    	},

		CadreNomElement:{
			position:'relative',
			top:theme.spacing(2),
			right:'35%',
	    	backgroundColor:'#FFFFFF',
	    	width:'20%',
	    	height:'10%',
			margin: 'auto',
    	},

    	NomElement:{
    		position:'relative',
			top:'10%',
			textAlign:'center',
	    	fontSize:'25px',
	    	fontWeight:'bold',
	    	color: '#4888EA',


    	},

		CadreInterieur:{
			position:'relative',
			top:theme.spacing(2),
			width:'95%',
			margin:'auto',
			
    	},

    	CadreBouton:{
			position:'relative',
			paddingTop:theme.spacing(2),
			//paddingLeft:theme.spacing(20),
			width:'95%',
			//margin:'auto',
			
    	},

		CadreElement:{
			width:'100%',
			margin:'auto',
			backgroundColor:'white',
    	},



    	BoutonRetour:{
    		//marginTop:'0%',
    		//marginLeft: '50%',
    	},

      	BoutonReserver:{
      		//marginLeft: '50%',

    	},




	})
);

function disponible(statut){
  return (statut === true ? "Disponible" : "Non-Disponible");
}
const Dispo = disponible(statut)

const OBJET_RESERVER_LINK = [
    {
        name: "Description",
        detail: description,
        
    },

    {
        name: "Type",
        detail: type,
        
    },

    {
        name: "Assos",
        detail: assos,
        
    },

    {
        name: "statut",
        detail: Dispo,
       
    },

    {
        name: "Caution",
        detail: caution + "$",
        
    },

];
function Disponible(statut){
	const classes = useStyles();
	return (statut === true ? <div className={classes.Vert}>Disponible</div> : <div className={classes.Red}>Non-Disponible</div>);
}


function Reservation(){
	const classes = useStyles();
	return(
		<div className = {classes.root}>
				<div className={classes.CadreSousTitre}>
					<div className={classes.SousTitre}>
						RESERVER UN ELEMENT
					</div>
				</div> 

				<div className={classes.CadreExterieur}>
					<div className={classes.CadreNomElement}>
						<div className={classes.NomElement}>
							{nom}
						</div>
					</div>

					<div className = {classes.CadreInterieur}>
				
						<List>
						  {OBJET_RESERVER_LINK.map((element) => {
						      return (
						          <ListItem key={"list_" + element.name}  >
						            <div className = {classes.CadreElement}>
						              <ListItemText
						                  primary={element.name}
						                  secondary={element.detail}
						              />
						            </div>
						          </ListItem>               
						      );
						  })}
						</List>
					</div>
					<div className = {classes.CadreBouton}>
						<Button
						component={RouterLink}
						to="/resa"
						variant="contained"
						color="secondary"
						className={classes.BoutonRetour}
						>
						  <strong>RETOUR</strong> 
						</Button> 

						<Button
						component={RouterLink}
						variant="contained"
						color="primary"
						className={classes.BoutonReserver}
						>
						  <strong>RESERVER</strong> 
						</Button>
					</div>
		           </div> 				



		</div>

		)
}

export default Reservation;

{/*card, parper*/}