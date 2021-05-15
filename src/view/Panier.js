import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DatePicker from './OutilResa/DatePicker.js';
import MultilineTextFields from './OutilResa/MultilineTextFields.js';
import SimpleSelect from './OutilResa/SimpleSelect.js';
import Chips from './OutilResa/Chips.js';
import {
	BrowserRouter as Router,
	Route,
	useParams
  } from "react-router-dom";

const useStyles = makeStyles((theme) =>
	({
		CadreSousTitre:{
			position:'relative',
			marginTop:theme.spacing(3),
			backgroundColor:'#4888EA',
			width: '35%',
			height: '50px',
			margin: 'auto',
    	},

    	SousTitre:{
    		position:'relative',
			top:'15%',
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
			height : '500px',
			margin: 'auto',
    	},

    	CadreInterieur:{
			position:'relative',
			top:theme.spacing(10),
			width:'100%',
			margin:'auto',
			
    	},

    	CadreBouton:{
			position:'relative',
			paddingTop:theme.spacing(1),
			width:'95%',
    	},
	})
);









export default function Panier(){
	if (localStorage.getItem('materiels')==null){
	var param  = "Vide";
	var paramquant = "";
	}else{
	param=  JSON.parse(localStorage.getItem('materiels'));
	paramquant =  JSON.parse(localStorage.getItem('quantite'));
	}	
	
	const classes = useStyles();
	return(
		<div className={classes.root}>
			<div className={classes.CadreSousTitre}>
				<div className={classes.SousTitre}>
					PANIER
				</div>
			</div>

			<div className={classes.CadreExterieur}>
				<div className={classes.CadreInterieur}>
					 Matériel:<Chips matreserved={param} quantreserved={paramquant}/>
				</div>
				<div className={classes.CadreInterieur}>
					<SimpleSelect/>
				</div>
				<div className={classes.CadreInterieur}>
					<MultilineTextFields/>
				</div>
				<div className={classes.CadreInterieur}>
					<DatePicker/>
				</div>
			</div>


			<div className={classes.CadreBouton}>
			<div className = {classes.CadreBouton}>
				{/*Ce bouton devrait vider le panier*/}
				<Button
					component={RouterLink}
					to="/resa"
					variant="contained"
					color="secondary"
					className={classes.BoutonRetour}
				>
						<strong>ANNULER</strong> 
				</Button> 
				{/*Ce bouton va creer le formulaire de reservation*/}
				<Button
					component={RouterLink}
					to="/resa"
					variant="contained"
					color="primary"
					className={classes.BoutonReserver}
				>
						<strong>ENVOYER LA DEMANDE</strong> 
				</Button>
			</div>
			</div>

		</div>
		)

}