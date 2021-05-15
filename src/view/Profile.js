import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@material-ui/core";
import {useKeycloakAuth} from "../utils/authorizations";
import {getHealthCheck} from "../request/backend/privateRequest";
import {getDefaultErrorMessage} from "../request/requestErrors";

function Profile({errorHandler}){
    const { keycloak, privateRequest } = useKeycloakAuth();
    const [ serverMessage, setServerMessage ] = useState("");

    // TEMPORARY, to demonstrate how to make a request using kc token
    // TODO: Remove this
    useEffect((local) => {
        getHealthCheck(privateRequest).then(res => {
            console.log(res);
            setServerMessage(res.message);
        }).catch( err => {
            errorHandler(getDefaultErrorMessage(err, local));
        });
    }, [errorHandler, privateRequest]);

    return(
        <Container>
            <Typography variant={'h6'}>Profil de {keycloak.tokenParsed.preferred_username}</Typography>
            <Typography variant={'h6'}>Le serveur dit : {serverMessage}</Typography>
        </Container>
    );
}

export default Profile;