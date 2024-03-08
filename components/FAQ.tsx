import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="white"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              What is Polywatch, and what is its goal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              Polywatch is an NFT project featuring unique ERC721 digital watches. Each piece is a one-of-a-kind digital masterpiece. The goal is to provide an authentic and engaging experience for watch enthusiasts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              How do I receive support for Polywatch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              You can receive support by joining our Discord community. Our team is ready to assist and answer any questions you may have.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              How do I buy Polywatch NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              You can buy Polywatch NFTs through our marketplace using cryptocurrency. Follow the steps on our website to make a purchase.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              Can I participate in the Polywatch beta test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              Yes, you can! Keep an eye on our announcements for details on how to participate in the Polywatch beta test. Get ready for an exciting experience!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              What benefits do Polywatch NFT holders get?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              Polywatch NFT holders enjoy exclusive perks, including early access to new releases, participation in beta tests, and discounts on future physical Polywatch products.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6d-content"
            id="panel6d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              Can I sell my Polywatch NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              Yes, you can sell your Polywatch NFT on approved marketplaces. Follow the guidelines provided to ensure a smooth selling process.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7d-content"
            id="panel7d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              How can I claim a physical Polywatch with my NFT ownership?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              As a Polywatch NFT holder, you'll receive incredible discounts on the purchase of physical Polywatches. Stay tuned for details on claiming your exclusive discount.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel9'}
          onChange={handleChange('panel9')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9d-content"
            id="panel9d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              Where can I view the Polywatch roadmap?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              The Polywatch roadmap is available on our official website. Check it out to stay updated on upcoming milestones and developments.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel10'}
          onChange={handleChange('panel10')}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10d-content"
            id="panel10d-header"
          >
            <Typography component="h3" variant="subtitle2" color="inherit">
              How can I join the Polywatch community?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' }, color: 'inherit' }}
            >
              Joining the Polywatch community is easy! Head over to our Discord channel and connect with other Polywatch enthusiasts. Share your experiences, ask questions, and be part of the revolution!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
