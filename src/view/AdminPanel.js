import React, {useContext} from 'react';
import {Container, Typography} from "@material-ui/core";
import LanguageContext from "../LanguageContext";

function AdminPanel(){
    const local = useContext(LanguageContext);

    return(
        <Container>
            <Typography variant={'h6'}> {local.View.AdminPanel.title} </Typography>
        </Container>
    );
}

export default AdminPanel;