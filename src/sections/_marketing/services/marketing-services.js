import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Image from 'src/components/image';

export default function MarketingServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <Image alt="Voyage Vibes Services" src="/assets/illustrations/illustration_services.svg" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Our Comprehensive Digital Services</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              At Voyage Vibes, we specialize in delivering innovative web and mobile development solutions. 
              Our expertise in search engine optimization and digital marketing ensures your business stands out 
              in the competitive digital landscape. Partner with us to elevate your brand and achieve your goals!
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
