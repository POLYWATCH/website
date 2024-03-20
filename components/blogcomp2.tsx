import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

export default function MultiActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="./images/TIME11.png"
          alt="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            $TIME AIRDROP
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          The TIME token is Polywatch’s governance token, designed to empower users within the Polywatch ecosystem.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://medium.com/@POLYWATCH/time-airdrop-2f89fedcf8be"> 
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
