import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GoPro11 from '../src/assets/gopro11.png';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCardGoPro11() { 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link 
        to="/gopro11" 
        style={{ textDecoration: 'none', color: 'inherit' }} 
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={GoPro11} 
            alt="GoPro Hero 11"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GoPro Hero 11
            </Typography>
            <Typography>À partir de 5,00€</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          component={Link} 
          to="/gopro11" 
        >
          Voir plus
        </Button>
      </CardActions>
    </Card>
  );
}
