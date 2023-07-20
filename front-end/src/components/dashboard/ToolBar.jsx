import * as React from "react";
import Box from "@mui/material/Box";
import useD from "./hookD/useD";
import DialogComponent from "./Dialog";
import App__Bar from "./AppBar";

export default function PrimarySearchAppBar({ Click, sx }) {
  const [isMessagesOpen, setIsMessagesOpen] = React.useState(false); // State for messages popup
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false); // State for notifications popup
  const [messages, setMessages] = React.useState([]); // Data for messages
  const [notifications, setNotifications] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const {
    handleMessagesClose,
    handleNotificationsClose,

    renderMenu,
    renderMobileMenu,
  } = useD({
    setIsMessagesOpen,
    setIsNotificationsOpen,
    setAnchorEl,
    setMobileMoreAnchorEl,
    anchorEl,
    mobileMoreAnchorEl,
  });

  const messagesList = [
    { id: 1, text: "Message 1" },
    { id: 2, text: "Message 2" },
  ];

  const notificationsList = [
    { id: 1, text: "Notification 1" },
    { id: 2, text: "Notification 2" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <App__Bar
        anchorEl={anchorEl}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        setAnchorEl={setAnchorEl}
        setIsMessagesOpen={setIsMessagesOpen}
        setIsNotificationsOpen={setIsNotificationsOpen}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
        Click={Click}
        sx={sx}
      />

      <DialogComponent
        open={isMessagesOpen}
        onClose={handleMessagesClose}
        NList={messagesList}
      />
      <DialogComponent
        open={isNotificationsOpen}
        onClose={handleNotificationsClose}
        NList={notificationsList}
      />
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
