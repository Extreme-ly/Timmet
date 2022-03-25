import { Box, Button, IconButton, SpeedDial, SpeedDialAction, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import '@fontsource/roboto/100.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import anime from 'animejs'
import { useEffect, useRef } from 'react'
import AppbarLanding from '../components/AppbarLanding'

function TitleDivider() {
  return (
    <Box sx={{ width: "24rem", height: 2, background: "#EEEEEE", position: 'absolute', ml: 29 }}></Box>
  )
}

const Home: NextPage = () => {
  useEffect(() => {
    anime({
      targets: '.speed-dial',
      translateY: -20,
      direction: 'alternate',
      duration: 1000,
      easing: 'easeInOutExpo',
      loop: true
    })
  }, [])
  const actions = [
    { icon: <AppleIcon color='disabled' />, name: 'Apple Store' },
    { icon: <AndroidIcon color='disabled' />, name: 'Play Store' },
    { icon: <TwitterIcon />, name: 'Our Twitter' },
    { icon: <InstagramIcon />, name: 'Our Insta Page' },
  ];

  return (
    <div>
      <Head>
        <title>Timmet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppbarLanding />

      <Box sx={{ height: "400px", display: 'grid', placeItems: 'center' }}>
        <Typography component='div' variant='h2' sx={{ letterSpacing: '1em' }} className="title">
          Timmet.
          <TitleDivider />
          <Typography variant='body1' sx={{ mt: 3, ml: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Typography>
        <IconButton size='large' sx={{ position: 'absolute', right: 0 }}>
          <ArrowForwardIcon fontSize="inherit" />
        </IconButton>
      </Box>  
  
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        className='speed-dial'
     
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

export default Home
