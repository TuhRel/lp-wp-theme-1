import React from "react";
import "./App.css";
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Styled from '@emotion/styled'
import Navbar from "./components/navbar";

function App() {

    return (

        <>
            <Navbar />
            <h1>Hello, world.</h1>
            <div>
            <ButtonLink to='/post'>
                <Button variant='contained'>Post</Button>
            </ButtonLink>
            </div>
            <div>
            <ButtonLink to='/post-archive'>
                <Button variant='contained'>All Post</Button>
            </ButtonLink>
            </div>
        </>

    );
}

const ButtonLink = Styled(Link)`
    text-decoration: none;
`

export default App;
