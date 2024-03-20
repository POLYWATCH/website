import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

export default function MultiActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="./images/8I8.png"
          alt="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            POLYWATCH X BROZO
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          POLYWATCH AND BROZO HAVE DECIDED TO COLLABORATE BY CREATING A LIMITED EDITION...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://x.com/BrozoNFT/status/1768999101918515555?s=20"> 
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
