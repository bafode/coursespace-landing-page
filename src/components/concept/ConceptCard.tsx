import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import { Concept } from '@/interfaces/concept'
import { Card, CardContent, Divider } from '@mui/material'

interface Props {
    item: Concept
}

const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 3,
    border: '1px solid',
    borderColor: 'primary.main',
    minHeight: '28vw',
    backgroundColor: "#F3F2FF"
};

const ConceptCard: FC<Props> = ({ item }) => {
    return (
        <Card sx={style}>

            <CardContent>
                <Typography textAlign={"center"} gutterBottom variant="h5" component="div" fontSize={"2rem"}>
                    {item.title}
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" fontSize={"1.5rem"}>
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default ConceptCard
