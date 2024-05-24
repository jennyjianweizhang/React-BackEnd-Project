import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  IconButton,
  TextField,
  Typography,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  ListSubheader,
  ListItemAvatar,
  Paper,
  InputBase,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  ListItemSecondaryAction,
  Switch,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";

import { sendDataToBackend } from "src/@core/services/chatDataService";
import { fetchAllData, addMessage, setSearchTerm } from "src/store/chatData";
import contactInfo from "src/@core/data/datasetContact";


const ChatRoom = () => {
  async function addData() {
    try {
      const res = await sendDataToBackend(contactInfo);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const dispatch = useDispatch();
  // const allData = useSelector((state) => state.chatData.allData || []);
  const allData = useSelector((state) => {
    console.log("Current state:", state);
    return state.chatData.allData || [];
  });

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  const selectSearchTerm = (state) => state.chatData.searchTerm;
  const searchTerm = useSelector(selectSearchTerm);

  const filteredChats = allData.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const [currentChatId, setCurrentChatId] = useState(11);
  const currentChatData = allData.find(
    (chat) => chat.id.toString() === currentChatId.toString()
  );
  console.log(allData);

  const [message, setMessage] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const [status, setStatus] = useState("online");

  const [checked, setChecked] = useState({
    twoStepVerification: true,
    notifications: true,
    inviteFriends: false,
    deleteAccount: false,
  });

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // currentChatId: ensure a valid chat is selected
    if (message.trim() !== "" && currentChatId) {
      const newMessage = {
        text: message,
        sender: "me",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      dispatch(addMessage({ chatId: currentChatId, message: newMessage }));

      setMessage("");
    }
  };

  const handleChatClick = (chatId) => {
    setCurrentChatId(String(chatId));
  };

  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const statusColors = {
    online: "lightgreen",
    away: "yellow",
    busy: "red",
    offline: "gray",
  };

  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

  const handleAvatarClick = () => {
    setProfileDrawerOpen(true);
  };

  const handleProfileDrawerClose = () => {
    setProfileDrawerOpen(false);
  };

  const Icon1 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z" />
      <path d="M9.999 13.587L7.7 11.292l-1.412 1.416l3.713 3.705l6.706-6.706l-1.414-1.414z" />
    </svg>
  );

  const Icon2 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" />
    </svg>
  );

  const Icon3 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
      />
    </svg>
  );

  return (
    <Box
      className="layout-page-content chatComponent"
      sx={{
        display: "flex",
        // height: "100vh",
        width: { xs: "100%", sm: "100%", md: "100%" },
        ml: { xs: "3%", sm: "0%", md: "-0.3%" },
        gap: 0,
        overflow: "hidden",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: { xs: "50%", sm: "50%", md: "380px" },
          "& .MuiDrawer-paper": {
            position: "relative",
            top: 0,
            left: 0,
            width: { xs: "100%", sm: "100%", md: "380px" },
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ marginRight: 1 }}
            onClick={() => handleProfileClick()}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: statusColors[status],
                    display: "block",
                  }}
                />
              }
            >
              <Avatar alt="John Doe" src="/images/avatars/1.png" />
            </Badge>
          </IconButton>
          <TextField
            fullWidth
            // id="search-chat"
            // type="text"
            placeholder="Search for contact..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            InputProps={{
              style: { borderRadius: "3rem" },
              startAdornment: (
                <IconButton position="start">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
        <Divider />
        <List subheader={<ListSubheader>Chats</ListSubheader>}>
          {filteredChats.length > 0? (
            <List>
              {filteredChats.filter((chat) => chat.messages && chat.messages.length > 0)
            .map((chat, index) => (
              <ListItem
                key={index}
                button
                onClick={() => handleChatClick(chat.id)}
              >
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: statusColors[status],
                          display: "block",
                        }}
                      />
                    }
                  >
                    <Avatar alt={chat.name} src={chat.avatar} />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={chat.name}
                  secondary={chat.messages[chat.messages.length - 1].text}
                />
                <Typography variant="caption" sx={{ marginLeft: 2 }}>
                  {chat.date}
                </Typography>
              </ListItem>
            ))}
              </List>
          ): (
            <Typography sx={{ mx: 2, my: 2 }}>No Chats Found</Typography>
          )}
            
        </List>
        <Divider />
        <List subheader={<ListSubheader>Contacts</ListSubheader>}>
          {filteredChats.length > 0? (
            <List>
              {
                filteredChats.filter((chat) => chat.messages.length <= 0)
                .map((contact, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handleChatClick(contact.id)}
                  >
                    <ListItemAvatar>
                      <Avatar alt={contact.name} src={contact.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={contact.name}
                      secondary={contact.about}
                    />
                  </ListItem>
                ))}
              
              </List>
          ): (
            <Typography sx={{ mx: 2, my: 2 }}>No Contacts Found</Typography>
          )}
            
        </List>
      </Drawer>

      {/* Main content area */}

      <Box
        sx={{
          width: { xs: "50%", sm: "40%", md: "calc(100% - 380px)" },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          border: "1px solid rgba(50, 71, 92, 0.1)",
        }}
      >
        {/* Profile Drawer */}

        <Drawer
          anchor="left"
          open={isOpen}
          onClose={handleDrawerClose}
          sx={{
            width: "48%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              position: "absolute",
              width: 380,
              left: { xs: "12%", sm: "8%", md: "4%", lg: "45%", xl: "45%" },
              top: 80,
              height: "100%",
              boxSizing: "border-box",
              zIndex: 1000,
            },
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            BackdropProps: {
              sx: {
                position: "absolute",
                top: 80,
                left: { xs: "30%", sm: "25%", md: "45%", lg: "45%", xl: "50%" },
                width: "160%",
                height: "100%",
              },
            },
          }}
        >
          <Box sx={{ width: 380 }} role="presentation">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    sx={{ ml: 33 }}
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: statusColors[status],
                          display: "block",
                        }}
                      />
                    }
                  >
                    <Avatar
                      alt="John Doe"
                      src="/images/avatars/1.png"
                      sx={{ width: "5rem", height: "5rem" }}
                    />
                  </Badge>
                </ListItemAvatar>
              </ListItem>
              <ListItemText
                primary="John Doe"
                secondary="Admin"
                sx={{ textAlign: "center" }}
              />

              <ListItem>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  defaultValue="Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie marshmallow."
                  variant="outlined"
                  label="About"
                  sx={{
                    width: "200%",
                    "& .MuiInputLabel-root": {
                      fontSize: "1.3rem",
                    },
                  }}
                />
              </ListItem>
              <ListItem>
                <FormControl component="fieldset">
                  <FormLabel component="legend">STATUS</FormLabel>
                  <RadioGroup
                    row
                    aria-label="status"
                    name="row-radio-buttons-group"
                    value={status}
                    onChange={handleStatusChange}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <FormControlLabel
                      value="online"
                      control={
                        <Radio
                          sx={{
                            color: statusColors["offline"],
                            "&.Mui-checked": {
                              color: statusColors["online"],
                            },
                          }}
                        />
                      }
                      label="Online"
                    />
                    <FormControlLabel
                      value="away"
                      control={
                        <Radio
                          sx={{
                            color: statusColors["offline"],
                            "&.Mui-checked": {
                              color: statusColors["away"],
                            },
                          }}
                        />
                      }
                      label="Away"
                    />
                    <FormControlLabel
                      value="busy"
                      control={
                        <Radio
                          sx={{
                            color: statusColors["offline"],
                            "&.Mui-checked": {
                              color: statusColors["busy"],
                            },
                          }}
                        />
                      }
                      label="Do Not Disturb"
                    />
                    <FormControlLabel
                      value="offline"
                      control={
                        <Radio
                          sx={{
                            color: statusColors["offline"],
                            "&.Mui-checked": {
                              color: statusColors["offline"],
                            },
                          }}
                        />
                      }
                      label="Offline"
                    />
                  </RadioGroup>
                </FormControl>
              </ListItem>
              <Divider />
              <Typography sx={{ ml: 4 }}>SETTINGS</Typography>
              <ListItem sx={{ display: "flex" }}>
                <ListItemIcon>
                  <Icon1 />
                </ListItemIcon>
                <ListItemText
                  primary="Two-step Verification"
                  sx={{ width: "40rem" }}
                />
                <ListItem sx={{ mr: -10 }}>
                  <Switch
                    edge="end"
                    onChange={handleChange}
                    checked={checked.twoStepVerification}
                    name="twoStepVerification"
                  />
                </ListItem>
              </ListItem>

              <ListItem sx={{ display: "flex", mt: -7 }}>
                <ListItemIcon>
                  <Icon2 />
                </ListItemIcon>
                <ListItemText primary="Notifications" sx={{ width: "40rem" }} />
                <ListItem sx={{ mr: -10 }}>
                  <Switch
                    edge="end"
                    onChange={handleChange}
                    checked={checked.notifications}
                    name="notifications"
                  />
                </ListItem>
              </ListItem>

              <ListItem button sx={{ mt: -4 }}>
                <ListItemIcon>
                  <Icon3 />
                </ListItemIcon>
                <ListItemText primary="Invite Friends" />
              </ListItem>
              <ListItem button sx={{ mt: -2 }}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Delete Account" />
              </ListItem>
              <Divider />
              <ListItem>
                <Button variant="contained" color="primary" fullWidth>
                  Logout
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        {/* Chat Header */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            onClick={handleAvatarClick}
            badgeContent={
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor:
                    currentChatData.status === "online" ? "lightgreen" : "gray",
                  display: "block",
                }}
              />
            }
          >
            <Avatar src={currentChatData.avatar} sx={{ mr: 0 }} />
          </Badge>

          <Drawer
            anchor="right"
            open={profileDrawerOpen}
            onClose={handleProfileDrawerClose}
            sx={{
              "& .MuiDrawer-paper": {
                position: "absolute",
                width: 380,
                right: { xs: "-1%", sm: "0%", md: "1%", lg: "1%", xl: "23%" },
                top: 80,
                height: "100%",
                boxSizing: "border-box",
              },
            }}
            ModalProps={{
              keepMounted: true, 
              BackdropProps: {
                sx: {
                  position: "absolute",
                  top: 80,
                  left: { xs: "3%", sm: "4%", md: "2%", lg: "18.5%", xl: "31%" },
                  width: "80%",
                  height: "100%",
                },
              },
            }}
          >
            <Box sx={{ width: 380 }} role="presentation">
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Badge
                      sx={{ ml: 33 }}
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: statusColors[status],
                            display: "block",
                          }}
                        />
                      }
                    >
                      <Avatar
                        alt="John Doe"
                        src={currentChatData.avatar}
                        sx={{ width: "5rem", height: "5rem" }}
                      />
                    </Badge>
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary={currentChatData.name}
                  secondary={currentChatData.title}
                  sx={{ textAlign: "center" }}
                />
                <ListItem>
                  <ListItemText primary={currentChatData.about} />
                </ListItem>
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{ ml: 2, color: "rgba(50, 71, 92, 0.6)" }}
                  >
                    Personal Information
                  </Typography>
                  <List dense>
                    {/* Email */}
                    <ListItem>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary={currentChatData.email} />
                    </ListItem>

                    {/* Phone */}
                    <ListItem>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435c.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414L9.586 7L8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414L19.586 17l-2.006 2.005z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary={currentChatData.phone} />
                    </ListItem>

                    {/* Schedule */}
                    <ListItem>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z" />
                          <path d="M13 7h-2v5.414l3.293 3.293l1.414-1.414L13 11.586z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary={currentChatData.schedule} />
                    </ListItem>
                  </List>
                  <Typography variant="body1" sx={{ ml: 2, color: "rgba(50, 71, 92, 0.6)" }}>Options</Typography>
                  <List dense>
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6l-4.286 6z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Add Tag" />
                    </ListItem>


                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="m6.516 14.323l-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454l-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315l-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385l-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603l1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962l4.09-.326z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Important Contact" />
                    </ListItem>

    
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <circle cx="7.499" cy="9.5" r="1.5" />
                          <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z" />
                          
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Shared Media" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Delete Contact" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zM4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.946 7.946 0 0 1 12 20c-4.411 0-8-3.589-8-8zm14.312 4.897L7.103 5.688A7.948 7.948 0 0 1 12 4c4.411 0 8 3.589 8 8a7.954 7.954 0 0 1-1.688 4.897z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Block Contact" />
                    </ListItem>
                  </List>
                </Box>
              </List>
            </Box>
          </Drawer>

          <Box sx={{ flexGrow: 1, ml: 5 }}>
            <Typography
              sx={{
                color: "rgba(50, 71, 92, 0.87)",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                fontWeight: "500",
              }}
            >
              {currentChatData.name}
            </Typography>
            <Typography
              sx={{
                color: "rgba(50, 71, 92, 0.38)",
                fontSize: "0.75rem",
                lineHeight: "1.66",
              }}
            >
              {currentChatData.title}
            </Typography>
          </Box>
          <IconButton aria-label="video call">
            <VideocamIcon />
          </IconButton>
          <IconButton aria-label="phone call">
            <PhoneIcon />
          </IconButton>
          <IconButton aria-label="search chat">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="more options" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>View Contact</MenuItem>
            <MenuItem onClick={handleClose}>Mute Notifications</MenuItem>
            <MenuItem onClick={handleClose}>Block Contact</MenuItem>
            <MenuItem onClick={handleClose}>Clear Chat</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </Box>
        <Divider />

        {/* Chat Messages */}
        <List sx={{ flexGrow: 1, overflowY: "auto" }}>
          {currentChatData && currentChatData.messages.length > 0 ? (
            currentChatData.messages.map((msg, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: msg.sender === "me" ? "row-reverse" : "row",
                  justifyContent: msg.sender === "me" ? "flex" : "flex-start",
                }}
              >
                <ListItemIcon>
                  <Avatar
                    src={
                      msg.sender === "me"
                        ? "/images/avatars/1.png"
                        : currentChatData.avatar
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    backgroundColor:
                      msg.sender === "me"
                        ? "rgb(105, 108, 255, 0.16)"
                        : "rgb(255, 255, 255)",
                    borderRadius: "6px",
                    boxShadow:
                      "rgba(50, 71, 92, 0.2) 0px 2px 1px -1px, rgba(50, 71, 92, 0.14) 0px 1px 1px 0px, rgba(50, 71, 92, 0.12) 0px 1px 3px 0px",
                    color: msg.sender === "me" ? "white" : "black",
                    padding: 2,
                    maxWidth: "fit-content",
                  }}
                  primary={msg.text}
                  secondary={`${msg.timestamp}`}
                  primaryTypographyProps={{
                    sx: { textAlign: msg.sender === "me" ? "right" : "left" },
                  }}
                  secondaryTypographyProps={{
                    sx: { textAlign: msg.sender === "me" ? "right" : "left" },
                  }}
                />
              </ListItem>
            ))
          ) : (
            <ListItem sx={{ justifyContent: "center" }}>
              <ListItemText
                primary="No messages in this chat."
                primaryTypographyProps={{ style: { textAlign: "center" } }}
              />
            </ListItem>
          )}
        </List>

        {/* Type Message */}
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "2px 4px",
            margin: theme.spacing(1),
            width: "auto",
          }}
          elevation={3}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type your message here…"
            inputProps={{ "aria-label": "type your message here" }}
            value={message}
            onChange={handleInputChange}
          />
          <IconButton sx={{ p: "10px" }} aria-label="attach file">
            <AttachFileIcon />
          </IconButton>
          <IconButton sx={{ p: "10px" }} aria-label="voice input">
            <KeyboardVoiceIcon />
          </IconButton>
          <Button
            variant="contained"
            onClick={handleSendMessage}
            sx={{
              backgroundColor: "rgb(105, 108, 255)",
              "&:hover": { backgroundColor: "rgb(85, 88, 220)" },
            }}
          >
            Send
          </Button>
        </Paper>
      </Box>
      {/* <button onClick={addData}>addData</button> */}
    </Box>
  );
};

export default ChatRoom;
