import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Box, colors, Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DisplayIcon from '@material-ui/icons/Computer';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlaceIcon from '@material-ui/icons/Place';
import WikiIcon from '@material-ui/icons/Language';
import DocumentIcon from '@material-ui/icons/InsertDriveFile';
import Image from '../assets/image/Reservation2.jpg';
import Stepper from './OutilResa/Stepper';
import {route as routeList} from "../route/RouteResa";
import {local as localFr} from "../assets/lang/fr_fr";
import {local as localEn} from "../assets/lang/en_us";
import {LanguageProvider} from "../LanguageContext";
import * as PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import userWantsDarkMode from "./App"
import { Block } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Reservation from "./Reservation.js";



// va être utiliser pour mes routes 
BoutonReservation.propTypes = {
    routes: PropTypes.array.isRequired,
};



const useStyles = makeStyles((theme) =>
	({
		Cadretitre:{
			//display:'flex',
			position: 'relative',
			left:'25%',
			top:'20%',
			backgroundColor: '#ff0000',
			//% pour adapter à la taille de l'ecran
			width: '50%',
			height : '50%',			
			color : '#FFFFFF',
			fontWeight : 'bold',
			fontSize : '20px',
			//pour laisser l'espace entre le haut du cadre  et le texte
			paddingTop : '4%',
			 			
		},

		ImageReservation:{
			backgroundImage: `url(${Image})`,//j'insère une image en bacground du rectangle
			height: '200px',
			margin: 'auto',
			
		}, 

		CadreGrille: {
			position: 'relative',
			backgroundColor: '#FFC0CB',
			height : '500px',
			overflow: 'hidden'

		},

		CadreButton : {
			position: 'relative',
			//display piur que les boutons soient alignés
			display:'inline-block',
			backgroundColor: '#FFFFFF',
			//height : '60px',
			textAlign: 'center',
			margin: theme.spacing(1),
			//borderStyle : 'solid ',
			width:'30%'
			
					
		},

		CadreFiltre: {
            postion:'relative',
            backgroundColor :'#0040ff',
            height : '300px'

        },
		
		

		

	})

);

const materiels = [
	{ objet: 'ballon', type :'divertissement' },
	{ objet: 'Crepière', type : 'divertisssement ' },
	{ objet: 'table', type :'divertissement' },
	{ objet: 'Amphis', type : 'divertisssement ' },
	{ objet: 'tpe', type :'divertissement' },
	{ objet: 'Caméra', type : 'divertisssement ' },
	{ objet: 'tpe', type :'divertissement' },
	{ objet: 'Caméra', type : 'divertisssement ' },
	{ objet: 'ballon', type :'divertissement' },
	{ objet: 'Crepière', type : 'divertisssement ' },
	{ objet: 'table', type :'divertissement' },
	{ objet: 'Amphis', type : 'divertisssement ' },
	{ objet: 'tpe', type :'divertissement' },
	{ objet: 'Caméra', type : 'divertisssement ' },
	{ objet: 'tpe', type :'divertissement' },
	{ objet: 'Caméra', type : 'divertisssement ' },
	
	
  ];
function DefMateriel(props){
    return <h1>{props.name}</h1>
}
function Materiel(){
	const classes = useStyles("");
	//cette fonction nous permet de créer un bouton pour chaque élément de la liste matériel 
	const listmat = materiels.map((materiel) =>
	
    //<Grid item xs={7}> 
    <Button className = {classes.CadreButton} > 
    	<DefMateriel name = {materiel.objet} />
    </Button>
   //</Grid>
   );
	

    return(


<div  >
	{listmat}
</div>


  
        );
}
  

//fonction qui me permet de faire le visuelle de mes bouton de redirection
function BoutonReservation ({routes}){
// je crée une constante pour le nom de mon bouton de redirection en faisant apelle au fichier fr et ang
const [language, setLanguage] = React.useState((navigator.language  === "fr" || navigator.userLanguage === "fr") ? localFr : localEn);

// bouton route permet de creer le desing de mon bouton, en faisant apelle à RouteResa je met un icone puis il permet de me rediriger vers le nom du bouton sur le fichier fr et ang
const boutonRoute =(
	<List>
		{/*on utilise la route map déja créer qui associe une route à un index et on en fait une liste de bouton de redirection*/}
	    {routes.map((route, indexRoute) => {
	        return (
	            <React.Fragment key={'DrawerList_' + indexRoute}>
	                {route.map((element, index) => {
	                    return (<ListItem button key={element.name + '_' + index} component={Link} to={element.path}>
	                        <ListItemIcon>{element.icon}</ListItemIcon>
	                        <ListItemText primary={language.RouteResa[element.path]}/>
	                    </ListItem>);
	                })}
	                {(indexRoute < (routes.length - 1)) ? <Divider/> : null}
	            </React.Fragment>

	        );
	    })}
	</List>
);
return(
	<div>
		{/*on affiche ma liste de bouton en appellant boutonRoute*/}
		{boutonRoute}
		
	</div>
)


}

function MesRoutes() {
	return (
	  <div>
		<Switch >
	  {/*La fonction ResaMain est ce qui est afficher de base quand on lance la page Resa, pour l'appeler il faut utiliser le path /Resa*/}
		  <Route exact path="/resa" children={<ResaMain />} />
		{/*Pour afficher la fonction Reservation il faut l'appeler à l'aide du path : /resa/Reservation.*/}
		  <Route path="/resa/Reservation" children={<Reservation />} />
		</Switch>
	  </div>
	);
  }
  




function ResaMain(){


	const classes = useStyles("");
	const [errorMessage, setError] = useState("");
	
	// je crée ma map de route que boutonRoute va utiliser


	return(  

			
				<Container maxWidth ="lg" fixed >
					<Container maxWidth ="lg" fixed >
					
						

						{/**<img src={Image} alt="Image" width="800" height="150"/>*/}{/* j'inserère image de reservation*/}
						<Stepper/>


						{/* l'apelle la fonction BoutonReservation qui me fait un visuelle du bouton*/}
						
					</Container>
					<Container maxWidth ="lg" fixed>

                    <div className={classes.CadreFiltre}>
						<Autocomplete
							id="combo-box-demo"
							options={materiels}
							getOptionLabel={(option) => option.objet}
							// problème backgroundcolor du cadre en passant au dark mode
							style={{width : '40%', backgroundColor : userWantsDarkMode ? '#ffffff' : '#000000', marginLeft: '35%' }} 
							renderInput={(params) => <TextField {...params} label="Rechercher un matériel..." variant="outlined" />}
							
					        
    					/>
  						
						<label><input name='Divertissement' type="checkbox" style = {{marginLeft : '20%', fontWeight : 'bold',}} ></input>Divertissement</label>
						<label><input name='Divertissement' type="checkbox"></input>Amphis</label>
						<label><input name='Divertissement' type="checkbox"></input>Electromenager</label>
						<label><input name='Divertissement' type="checkbox"></input>Autre</label>

                       
                    </div>
					

                    </Container>
					<Container maxWidth ="lg" fixed >
						<div className = {classes.CadreGrille} >
						<div className={classes.root}>
      						<Grid container spacing={3}>
								<Materiel/>
        						
    
      						</Grid>

							
   						</div>
 
						</div>

					</Container>

				      {/*en bas du container on met en place un bouton de redirection qui 
      réfère la fonction Reservation grâce au path resa/Resaervation*/}
				<Button
				component={RouterLink}
				to="/resa/Reservation"
				variant="contained"
				color="primary"
				className={classes.button}
				>
					Reserver ton objet 
				</Button>
							
			       	
       			</Container>

		      
		       
           
	)
}


export default function Resa() {
	const classes = useStyles();
	return (
	  <div>
		<Container maxWidth ="lg" >
		  <div className={classes.root}>
  
			{/*Image + cadreTitre + Titre du site résa*/}
			<div className = {classes.ImageReservation} >
			  <div className = {classes.Cadretitre}>
				PLATEFORME DE RESERVATION
			  </div>
			</div>
  
			{/*j'utilise ma fonction MesRoutes qui me génère mes routes de mes 
			fonctions qui vont afficher le contenu de la vue Resa */}
			<Router>
			  <MesRoutes />
			</Router>
  
  
		  </div>
		</Container>
	  </div>
	);
  }




