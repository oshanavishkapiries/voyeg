import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Button, { buttonClasses } from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { pageLinks, navConfig } from './config-navigation';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const mdUp = useResponsive('up', 'md');

  const pathname = usePathname();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = mdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Logo single />

      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © 2024. All rights reserved
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between">
          {/* Logo and Slogan */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3} alignItems="flex-start">
              <Logo />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The perfect partner for your digital journey, helping you succeed in web, mobile,
                and beyond.
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row" alignItems="center">
              <Typography variant="h6">Social</Typography>
              <Link href="https://www.linkedin.com/company/voyage-vibes/">
                <IconButton color="primary">
                  <Iconify icon="mdi:linkedin" />
                </IconButton>
              </Link>
            </Stack>
          </Grid>

          {/* Quick Links and Social */}
          <Grid item xs={12} md={6}>
            <Stack spacing={{ xs: 3, md: 5 }} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
              <Stack spacing={1} alignItems="flex-start">
                <Typography variant="h6">Quick Links</Typography>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  About
                </Link>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Services
                </Link>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Home
                </Link>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Contact Us
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2024 Voyage Vibes. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </>
  );

  // return <footer>{isHome ? simpleFooter : mainFooter}</footer>;

    return <footer>{mainFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

export function ListMobile({ list }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
