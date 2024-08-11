import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GoPro12 from '../src/assets/gopro12.jpeg'; 
import { Link } from 'react-router-dom';

export default function MultiActionAreaCardGoPro12() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link 
        to="/gopro12" 
        style={{ textDecoration: 'none', color: 'inherit' }} 
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={GoPro12} 
            alt="GoPro Hero 12"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GoPro Hero 12
            </Typography>
            <Typography>À partir de 10,00€</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          component={Link} 
          to="/gopro12" 
        >
          Voir plus
        </Button>
      </CardActions>
    </Card>
  );
}
