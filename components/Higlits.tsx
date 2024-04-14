import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const items = [
  {
    
    title: 'Investment',
    description:
      ' NFT watches represent a burgeoning digital investment opportunity, potentially yielding substantial returns over time.',
  },
  
  {
    
    title: 'Interoperability',
    description:
      'Showcase your NFT POLYWATCH in your digital collection and seamlessly integrate them into evolving games and metaverse environments. With the upgrade function, you can upgrade and increase the rarity of your POLYWATCH.',
  },
  {
    
    title: 'Real Utility',
    description:
      'An NFT POLYWATCH provides tangible benefits, including a 70% discount on the corresponding physical watch, creating a unique bridge between the digital and physical worlds.',
  },
  
];

export default function Higlits() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'rgba(0, 0, 0, 0)',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
           WHY BUY A POLYWATCH
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
           Learn more
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: hoveredCard === index ? '#8e24aa' : 'transparent',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Box sx={{ opacity: '50%' }}></Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
