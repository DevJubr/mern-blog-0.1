import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { Search, SearchIconWrapper, StyledInputBase } from "./styledD/index";
import AppBar from "@mui/material/AppBar";
import useD from "./hookD/useD";
import { Box } from "@mui/material";

const App__Bar = ({
  setIsMessagesOpen,
  setIsNotificationsOpen,
  setAnchorEl,
  setMobileMoreAnchorEl,
  anchorEl,
  mobileMoreAnchorEl,
  Click,
  sx,
}) => {
  const {
    handleMobileMenuOpen,
    menuId,
    mobileMenuId,
    handleMessagesOpen,
    handleNotificationsOpen,
    handleProfileMenuOpen,
  } = useD({
    setIsMessagesOpen,
    setIsNotificationsOpen,
    setAnchorEl,
    setMobileMoreAnchorEl,
    anchorEl,
    mobileMoreAnchorEl,
  });
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={Click}
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={sx}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          M-BLOG
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            onClick={handleMessagesOpen}
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            onClick={handleNotificationsOpen}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default App__Bar;
