import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Box, Button, colors, Container, createStyles, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
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
			backgroundColor: '#ff0000',
			height : '500px',

		},

		CadreFiltre: {
			postion:'relative',
			backgroundColor :'#0040ff',
			height : '300px'

		},

		

	})

);

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





function Resa(){


	const classes = useStyles();
	const [errorMessage, setError] = useState("");

	// je crée ma map de route que boutonRoute va utiliser
	const generatedRoute = routeList.map((list,listIndex) => {
	    return (list.map((element, index) => {
	        return <Route exact key={"route_" + listIndex + "_" + index}
	            path={element.path}
	            // le render me permet de faire ma redirection vers mon fichier Reservation 
	            render={(props) => <element.render {...props} errorHandler={setError} />} />;
	    }));
	});


	return(  

			
				<Container maxWidth ="lg" fixed >
					<Container maxWidth ="lg" fixed >
						<div className = {classes.ImageReservation} >
							<div className = {classes.Cadretitre}>PLATEFORME DE RESERVATION
			       			</div>
			       		</div>
						

						{/**<img src={Image} alt="Image" width="800" height="150"/>*/}{/* j'inserère image de reservation*/}
						<Stepper/>


						{/* l'apelle la fonction BoutonReservation qui me fait un visuelle du bouton*/}
						<BoutonReservation routes ={routeList}>
							{/* je dynamise mon bouton avec switch et quand j'appuie dessus ça va faire ma redirection */}
							<Switch>
				                {generatedRoute}
				        	</Switch>
				        </BoutonReservation>
					</Container>




					<Container maxWidth ="lg" fixed>

					<div className={classes.CadreFiltre}>
						<input type= "search"></input>
						<input type="checkbox"></input>
						<label></label>
					</div>
						
					</Container>





					<Container maxWidth ="lg" fixed >
						<div className = {classes.CadreGrille} >
						<Grid countainer spacing ={4}>
							<Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid>
							<Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid><Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid><Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid><Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid>
							<Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid>

							<Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid>

							<Grid item xs={7}> 
								<Button color='#ffffff'>
									Ballon de basket
								</Button>
							</Grid>

						</Grid>
						</div>
						
					</Container>


			       	
			       	
       			</Container>

		      
		       
           
	)
}


export default Resa;




