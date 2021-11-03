import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'


function ProductCard({ item }) {
    return (
        <Grid item>
            <Card sx={{ maxWidth: 250, maxHeight: 400, p: 2 }} >
                <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt="image"
                    sx={{ maxWidth: 1, m: 'auto', objectFit: 'contain'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {item.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard;
