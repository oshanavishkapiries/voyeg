import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Link from 'next/link';

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'secondary.main' }}>
              SOFTWARE COMPANY AND
            </Typography>

            <Typography variant="h3" sx={{ my: 3 }}>
              Reliable IT Support & Innovative Business Solutions for Growth
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Voyage Vibes specializes in providing software solutions and services for companies of
              all sizes across various industry sectors, with a dedicated focus on the
              travel industry.
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              <Link href="/about">
                <Button variant="contained" color="inherit" size="large">
                  Learn more
                </Button>
              </Link>

              <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                <Link href="/contact">
                  <Fab size="medium" sx={{ mr: 1 }}>
                    <Iconify width={24} icon="ic:sharp-phone" />
                  </Fab>
                </Link>
                Contact Us
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="/assets/illustrations/heroBannerLogo.svg"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
