import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Web Development',
    description:
      'Create stunning and functional websites that elevate your brand and engage your audience effectively.',
    icon: '/img/services/web.svg', // Ensure this icon path is correct
  },
  {
    title: 'Mobile Development',
    description:
      'Design and develop user-friendly mobile applications tailored to meet your business needs and enhance user experience.',
    icon: '/img/services/mobile.svg', // Ensure this icon path is correct
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description:
      'Optimize your online presence to improve visibility, attract organic traffic, and boost search engine rankings.',
    icon: '/img/services/seo.svg', // Ensure this icon path is correct
  },
  {
    title: 'Digital Marketing',
    description:
      'Leverage digital channels to promote your brand and drive measurable results through targeted marketing strategies.',
    icon: '/img/services/marketing.svg', // Ensure this icon path is correct
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Our Services</Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        {SERVICES.map((service) => (
          <Box
            key={service.title}
            sx={{ textAlign: 'center', p: 3, boxShadow: 3, borderRadius: 2 }}
          >
            <SvgColor
              src={service.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
                borderRadius: '50%',
                p: 1.5,
              }}
            />

            <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
              {service.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>{service.description}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
