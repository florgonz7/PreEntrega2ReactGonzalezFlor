import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostItem({products}) {
    return (
        <Card sx={{ maxWidth: 360 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={products.images}
                title={products.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {products.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    ${products.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">See more</Button>
                
            </CardActions>
        </Card>
    );
}