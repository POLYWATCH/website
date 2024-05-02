import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link'; // Importa il componente Link da Next.js

const items = [
  {
    title: 'POLYWATCH PACK',
    description: 'Get your POLYWATCH BOX.',
    href: '/shop', // URL per POLYWATCH PACK
  },
  {
    title: '$TIME',
    description: 'Polywatch governance token.',
    href: '/$Time', // URL per $TIME
  },
  {
    title: 'ABOUT US',
    description: 'Find out more about POLYWATCH.',
    href: '/aboutus', // URL per ABOUT US
  },
  {
    title: 'EVOLVE',
    description: 'Play, evolve and earn.',
    href: '/evolve/evolve', // URL per EVOLVE
  },
  {
    title: 'BLOG',
    description: 'Latest info about Polywatch.',
    href: '/blog', // URL per BLOG
  },
  {
    title: 'MARKETPLACE',
    description: 'Polywatch official marketplace.',
    href: '/buy', // URL per MARKETPLACE
  },
];

export default function Highlights() {
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
        />
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={item.href} passHref>
                <Stack
                  direction="column"
                  alignItems="center"
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
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400', textAlign: 'center' }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
