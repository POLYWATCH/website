import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Polygon Blockchain',
    description:
      'Polywatch is an ERC721 token built on the Polygon Blockchain .',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to last',
    description:
      'Long-lasting investment, perfect for Watch enthusiasts.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Great user experience',
    description:
      'Integrate our watches into your routine,look and play with them whenever you want.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Innovative functionality',
    description:
      'Decentralized,secure and inclusive even for those new to the web3.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, join our discord server',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make your watch unique.',
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
        >
          <Typography component="h2" variant="h4">
            INFO
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: decentralization, uniqueness,
            user-friendly design. Precision in every detail.
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
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
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
