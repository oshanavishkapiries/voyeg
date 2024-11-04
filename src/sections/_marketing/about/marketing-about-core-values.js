import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Our clients’ needs drive every solution we craft, ensuring their success and satisfaction.',
    icon: '/assets/icons/ic_agreement.svg',
  },
  {
    title: 'Transparency',
    description: 'We believe in open communication and honesty to foster trust with every client and partner.',
    icon: '/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Reputation',
    description: 'Building a trusted name through quality and reliability in every project we deliver.',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Collaboration',
    description: 'Working hand-in-hand with clients, we value teamwork to achieve shared goals.',
    icon: '/assets/icons/ic_popularity.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        Our Core Values
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}>
            <SvgColor
              src={value.icon}
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                color: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
