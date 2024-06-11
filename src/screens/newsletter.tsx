import React, { FC } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StyledButton } from '../components/styled-button';
import { Grid } from '@mui/material';
import Image from 'next/image';

const HomeNewsLetter: FC = () => {
  return (
    <Box id='contact' sx={{ backgroundColor: 'background.paper', py: { xs: 2, md: 4 } }}>
      <Container>

        <Box
          sx={{
            backgroundColor: '#F3F2FF',
            borderRadius: 10,
            py: { xs: 2, md: 4 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Grid container>
            <Grid item md={12} sx={{ alignItems: { md: 'center' }, justifyContent: { md: 'center' } }}>
              <Typography variant="h1" component="h2" color="primary.main" textAlign={'center'} sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
                Sois le Premier Informé
              </Typography>
            </Grid>
            <Grid container item md={12} sx={{ alignItems: { md: 'center' }, justifyContent: { md: 'center' } }}>
              <Grid item xs={12} md={2}>
                <Image src="/images/logo.png" width={500} height={300} alt="logo" />
              </Grid>
              <Grid item xs={12} md={10}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography sx={{ mb: 1, fontSize: { xs: 18, md: 26 } }}>
                    Inscris-toi dès maintenant avec ton adresse mail pour recevoir une notification dès le lancement de BeeHive.
                  </Typography>
                  <Typography sx={{ mb: 1, fontSize: { xs: 18, md: 26 } }}>
                    Beehive est une Plateforme dédiée aux étudiants Espace dynamique pour l&apos;échange et la communication Partager leurs réalisations artistiques, académiques et professionnelles Faciliter les discussions et les interactions dans leurs domaines d&apos;études respectifs.
                    Ne manque pas lopportunité de faire partie de notre communauté étudiante dès le premier jour !.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={1} item md={12}>
              <Grid item xs={12} md={11}>
                <InputBase
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { xs: '100%', md: '70%' },
                    height: 48,
                    px: 2,
                    mb: { xs: 2, md: 0 },
                  }}
                  placeholder="Enter your Email Address"
                />
              </Grid>
              <Grid item xs={12} md={1}>
                <StyledButton disableHoverEffect size="large" >
                  Subscribe
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeNewsLetter;
