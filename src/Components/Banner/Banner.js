import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {
        //backgroundImage: 'url(./banner2.jpg)' 
        //backgroundImage: 'url(./1567665.png)'
        backgroundImage: 'linear-gradient( #22577a 1%, #001427)'
    },

    bannerContent: {
        display: 'flex',
        height: 400,
        paddingTop: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },

    tagline:{
        display: 'flex',
        flexDirection: 'column',
        height: '40%',
        textAlign: 'center',
        justifyContent: 'center',

    },
}));

const Banner = () => {
    const classes =  useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography variant='h2' style={{fontWeight: 'bold', marginBottom: 15, fontFamily: 'Montserrat',}}>
                        Crypto Coin
                        <Typography variant='subtitle2' style={{color: 'darkgrey', textTransform: 'capitalize', fontFamily: 'Montserrat',}}>
                            Get all the info regarding your favorite crypto currency
                        </Typography>
                    </Typography>
                </div>
                <Carousel/>
            </Container>
        </div>
    )
}

export default Banner
