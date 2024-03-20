import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="./images/3457.png"
          alt="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            POLYWATCH BOX
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
           WELCOME POLYWATCH BOX! You can secure one of this Boxes by getting Wl on discord ! Every BOX contains an unique,random, POLYWATCH NFT. The total number of boxes is 3000 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://medium.com/@POLYWATCH"> 
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
