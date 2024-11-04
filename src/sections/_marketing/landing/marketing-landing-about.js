import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Link from 'next/link';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'successful projects',
    total: 5,
    content:
      'Our team has delivered impactful solutions across mobile, web, SEO, and digital marketing.',
  },
  {
    label: 'happy clients',
    total: 50,
    content: 'Voyage Vibs is trusted by clients globally to enhance their digital footprint.',
  },
  {
    label: 'years of experience',
    total: 3,
    content: 'With a decade in the industry, we bring unparalleled expertise to every project.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        alt="landing about"
        src="/assets/images/marketing/marketing_post_hero.jpg"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            About Us
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Your Digital Growth Partner
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            At Voyage Vibs, we specialize in crafting customized solutions that drive growth in the
            digital age. From mobile and web development to SEO and digital marketing, we leverage
            the latest technology and best practices to help businesses thrive online. Our team is
            passionate about innovation and dedicated to delivering results that exceed
            expectations.
          </Typography>

          <Link href="/about">
            <Button
              size="large"
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
              sx={{ my: 5 }}
            >
              Learn more
            </Button>
          </Link>

          
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
