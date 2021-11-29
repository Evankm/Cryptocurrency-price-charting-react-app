import React from 'react'
import {AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        color: 'gold',
        flex: 1,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
}));

const Header = () => {
    const classes = useStyles()

    const navigate = useNavigate()

    const {currency, setCurrency} = CryptoState()
    //console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#001427'
            },

            type: 'dark',
        },
      });
    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar  position='static' >
            <Container>
                <Toolbar>
                    <Typography onClick={() => navigate('/')} className={classes.title} variant='h6'>
                        Cryto Coin
                    </Typography>
                    <Select variant='outlined' backgroundColor='#001427' style={{ width: 100, height: 40, marginRight: 15, }} value={currency} 
                    onChange={(e) => setCurrency(e.target.value)}>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'INR'}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header
