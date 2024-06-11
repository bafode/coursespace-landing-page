import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Concept } from '@/interfaces/concept'
import { ConceptCard } from '../concept'
import { conceptData } from './concepts.data'
import { Grid } from '@mui/material'


const HomeOurConcept: FC = () => {

    return (
        <Box
            id="concepts"
            sx={{
                backgroundColor: 'background.paper',
                pt: {
                    xs: 10,
                    md: 40,
                    lg: 15
                },
                pb: {
                    xs: 5,
                    md: 16,
                }
            }}
        >
            <Container>
                <Typography textAlign={"center"} color={"primary.main"} variant="h1" sx={{ fontSize: 40, paddingBottom: 8 }}>
                    Notre Concept
                </Typography>
                <Grid container spacing={1} maxWidth="lg" >
                    {conceptData.map((item: Concept) => (
                        <Grid key={item.id} item xs={12} sm={6} md={6} lg={4}>
                            <ConceptCard key={item.id} item={item} />
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </Box>
    )
}

export default HomeOurConcept
