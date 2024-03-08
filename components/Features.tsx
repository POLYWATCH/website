import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'User-Dashboard Profile',
    description:
      'Manage everything from your profile,$TIME and POLYWATCH.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Mobile integration',
    description:
      'POLYWATCH MOBILE APP, Available soon on all platforms.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Available on all platforms',
    description:
      'POLYWATCH is all platforms, such as web, mobile, and desktop.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 4, sm: 8, md: 16 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box>
            
          </Box>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
            sx={{ width: '100%' }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200'
                      : selectedItemIndex === index
                      ? 'primary.dark'
                      : 'grey.800',
                  '&:hover': {
                    backgroundColor: 'purple.main',
                    borderColor: 'purple.dark',
                  },
                  display: 'flex', // Rendi la Card Box un elemento flessibile
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === 'light'
                          ? selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300'
                          : selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700',
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none', width: '100%' }}>
                    <Typography
                      color="white"
                      variant="body2"
                      fontWeight="bold"
                      textAlign="center" // Allinea il testo al centro
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="white"
                      variant="body2"
                      sx={{ my: 0.5 }}
                      textAlign="center" // Allinea il testo al centro
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card
  variant="outlined"
  sx={{
    height: '100%',
    width: '100%',
    display: { xs: 'none', sm: 'flex' },
    pointerEvents: 'none',
  }}
>
  <Box
    sx={{
      m: 'auto',
      width: '100%',
      height: '100%',
      backgroundImage: 'url("/images/reward12.png")', // Sostituisci con il percorso dell'immagine desiderata
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
</Card>
        </Grid>
      </Grid>
    </Container>
  );
}
