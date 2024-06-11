import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { TypeAnimation } from 'react-type-animation'
import { Container } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeroContent: FC = () => {
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            mb: 3
                        }}>
                            <Typography
                                component="h2"
                                sx={{
                                    position: 'relative',
                                    fontSize: { xs: 40, md: 66 },
                                    letterSpacing: 1.5,
                                    fontWeight: 'bold',
                                    lineHeight: 1.3,
                                    color: 'white',
                                }}
                            >
                                <Typography
                                    component="mark"
                                    sx={{
                                        position: 'relative',
                                        color: 'white',
                                        fontSize: 'inherit',
                                        fontWeight: 'inherit',
                                        backgroundColor: 'unset',
                                    }}
                                >
                                    Bienvenue{' '}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: { xs: 24, md: 34 },
                                            left: 2,
                                            transform: 'rotate(3deg)',
                                            '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                                        }}
                                    >
                                        {/* eslint-disable-next-line */}
                                        <img src="/images/headline-curve.svg" alt="Headline curve" />
                                    </Box>
                                </Typography>
                                su
                                <Typography
                                    component="span"
                                    sx={{
                                        fontSize: 'inherit',
                                        fontWeight: 'inherit',
                                        color: 'primary.main',
                                        position: 'relative',
                                        '& svg': {
                                            position: 'absolute',
                                            top: -16,
                                            right: -21,
                                            width: { xs: 22, md: 30 },
                                            height: 'auto',
                                        },
                                    }}
                                >
                                    <svg version="1.1" viewBox="0 0 3183 3072">
                                        <g id="Layer_x0020_1">
                                            <path
                                                fill="#EDB138"
                                                d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                                            />
                                            <path
                                                fill="#ffffff"
                                                d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                                            />
                                            <path
                                                fill="#ffffff"
                                                d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                                            />
                                        </g>
                                    </svg>
                                </Typography>r{' '}
                                Beehive
                            </Typography>
                        </Box>
                        <Box sx={{ minHeight: 60 }}>
                            <Typography sx={{ color: 'white', lineHeight: 1.6 }}>
                                <TypeAnimation
                                    sequence={[
                                        'Rejoignez',
                                        700,
                                        'Rejoignez une', //  Continuing previous Text
                                        700,
                                        'Rejoignez une communauté',
                                        700,
                                        'Rejoignez une communauté dynamique',
                                        700,
                                        'Rejoignez une communauté',
                                        700,
                                        'Rejoignez une',
                                        700,
                                        'Rejoignez',
                                        700,
                                        '',
                                        500,
                                    ]}
                                    style={{ fontSize: '2em' }}
                                    repeat={Infinity}
                                    cursor={false}
                                />
                            </Typography>
                        </Box>
                        <Grid columnSpacing={5} container rowSpacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }} >
                            <Grid item md={12} container spacing={1}>
                                <Grid item xs={12} md={6} >
                                    <Box
                                        sx={{
                                            textAlign: { xs: 'center', md: 'left' },
                                            padding: '1rem',
                                            borderRadius: 1,
                                            bgcolor: 'primary.main',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                        }}
                                    >
                                        <Typography
                                            component="mark"
                                            sx={{
                                                color: 'white',
                                                fontSize: { xs: 12, md: 24 },
                                                fontWeight: 'bold',
                                                backgroundColor: 'unset',
                                                textAlign: 'center'
                                            }}
                                        >
                                            Beehive, Votre communauté étudiante
                                        </Typography>
                                        <br />
                                        <Typography
                                            component="mark"
                                            sx={{
                                                color: 'white',
                                                fontSize: { xs: 9, md: 20 },
                                                fontWeight: 'normal',
                                                backgroundColor: 'unset',
                                            }}
                                        >
                                            Connectez-vous avec des étudiants partageant les mêmes idées, partagez vos expériences et découvrez de nouvelles perspectives.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Box
                                        alignSelf={'center'}
                                        justifySelf={'center'}
                                        padding={'1rem'}
                                        sx={{
                                            borderRadius: 1,
                                            bgcolor: '#FEBF21',
                                            textAlign: { sm: 'center', md: 'start' },
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            sx={{
                                                fontSize: { xs: 20, md: 40 },
                                                letterSpacing: 1.5,
                                                fontWeight: 'bold',
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            <Typography
                                                component="mark"
                                                sx={{
                                                    color: 'primary.main',
                                                    fontSize: 'inherit',
                                                    fontWeight: 'inherit',
                                                    backgroundColor: 'unset',

                                                }}
                                            >
                                                Creativité
                                                <br />
                                                Colaboration
                                                <br />
                                                Connaissance
                                                <br />

                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={12}  >
                                    <Box
                                        padding={'1rem'}
                                        sx={{
                                            borderRadius: 1,
                                            bgcolor: '#FEBF21',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            sx={{
                                                letterSpacing: 1,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            <Typography
                                                component="mark"
                                                sx={{
                                                    color: 'primary.main',
                                                    fontSize: { xs: 10, md: 20 },
                                                    fontWeight: 'bold',
                                                    backgroundColor: 'unset',
                                                }}
                                            >
                                                Partager vos Créations
                                            </Typography>
                                            <br />
                                            <Typography
                                                component="mark"
                                                sx={{
                                                    color: 'primary.main',
                                                    fontSize: { xs: 10, md: 20 },
                                                    fontWeight: 'normal',
                                                    backgroundColor: 'unset',
                                                }}
                                            >
                                                Beehive est votre tribune pour montrer votre talent.
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                flex: 1,
                                width: '90%',
                                height: '100%',
                                display: { xs: 'none', sm: 'none', md: 'block' },
                                overflow: 'hidden',
                            }}>
                            <LazyLoadImage
                                style={{ objectFit: 'cover' }}
                                src="/images/beehive.png"
                                width={'100%'}
                                height={'100%'}
                                effect="opacity"
                                alt={''}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default HeroContent;