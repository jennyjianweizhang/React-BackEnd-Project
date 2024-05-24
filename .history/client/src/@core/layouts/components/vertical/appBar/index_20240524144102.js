// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MuiToolbar from '@mui/material/Toolbar'

import React, from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import { useMediaQuery, Menu, MenuItem, } from "@mui/material";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  
  // Existing styles
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  // New styles
  width: '96.3%',
  position: 'relative',
  backdropFilter: 'saturate(200%) blur(6px)',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: 'rgba(50, 71, 92, 0.1) 0px 2px 10px 0px',
  marginTop: '0.75rem',
  marginLeft: '1.5rem',
  borderRadius: '8px',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  // New styles
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0rem 1.5rem !important',
  minHeight: '64px !important',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out',
}));

const SearchIcon = () => (
  <SvgIcon>
    <path fill="currentColor" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"></path>
</SvgIcon>
);

const CustomIconOne = () => (
  <SvgIcon>
    <path fill="currentColor" d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"></path>
  </SvgIcon>
);

const CustomIconTwo = () => (
  <SvgIcon>
    <path fill="currentColor" d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10.007 10.007 0 0 0 2.583-4.491a1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343a7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483a10.027 10.027 0 0 0 2.89 7.848a9.972 9.972 0 0 0 7.848 2.891a8.036 8.036 0 0 1-1.484 2.059z"></path>
  </SvgIcon>
);

const CustomIconThree = () => (
  <SvgIcon>
     <path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
    <span className="MuiBadge-root css-9ysua">
        <path fill="currentColor" d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
        <span className="MuiBadge-badge MuiBadge-dot MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorError css-1xxpy12"></span>
      </span>
  </SvgIcon>
);

const CustomIconFour = () => (
  <SvgIcon>
    <path fill="currentColor" d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
  </SvgIcon>
);

const LayoutAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} className="layout-navbar">
      <Toolbar className="navbar-content-container">
        <Box className="actions-left" sx={{ display: 'flex', alignItems: 'center', ml: isMobile ? 0 : -8  }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Typography variant="body1">Search (Ctrl+/)</Typography>
        </Box>
        <Box className="actions-right">
          <IconButton color="inherit">
            <CustomIconOne />
          </IconButton>
          <IconButton color="inherit">
            <CustomIconTwo />
          </IconButton>
          <IconButton color="inherit">
              <CustomIconThree />
          </IconButton>
          <IconButton color="inherit">
            <Badge color="error" variant="dot">
              <CustomIconFour style={{ color: 'black' }}/>
            </Badge>
          </IconButton>
          <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<span></span>}>
            <Avatar alt="John Doe" src="/images/avatars/1.png" />
          </Badge>
          <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// const LayoutAppBar = props => {
//   // ** Props
//   const { settings, verticalAppBarContent: userVerticalAppBarContent } = props

//   // ** Hooks
//   const theme = useTheme()

//   // ** Vars
//   const { contentWidth } = settings

//   return (
//     <AppBar elevation={0} color='default' className='layout-navbar' position='static'>
//       <Toolbar
//         className='navbar-content-container'
//         sx={{
//           ...(contentWidth === 'boxed' && {
//             '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` }
//           })
//         }}
//       >
//         {(userVerticalAppBarContent && userVerticalAppBarContent(props)) || null}
//       </Toolbar>
//     </AppBar>
//   )
// }

export default LayoutAppBar
