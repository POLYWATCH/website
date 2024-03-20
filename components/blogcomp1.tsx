import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

export default function MultiActionAreaCard1() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="./images/reward11.png"
          alt="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            YOU CAN NOW GET WHITELISTED!
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
           
Follow these simple guidelines to obtain the coveted POLYWATCH WL role and ensure you participate in the exciting MINT! 🚀🎉
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://discord.gg/Tc2kBFBuY4"> 
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
