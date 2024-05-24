import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Checkbox,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Divider,
  Typography,
  SvgIcon,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import Inbox from "./Inbox";
import SearchBox from "./Search";
import Trash from "./Trash";
import Sent from "./Sent";
import Draft from "./Draft";
import Starred from "./Starred";
import Spam from "./Spam";
import Personal from "./Personal";
import Company from "./Company";
import Important from "./Important";
import Private from "./Private";
import ComposeWindow from "./Compose";

import { sendDataToBackend } from "src/@core/services/emailDataService";
import {
  fetchAllData,
  toggleReadStatus,
  moveEmailArrayToTrash,
} from "src/store/emailData";
import emailList from "src/@core/data/datasetEmail";

const Email = () => {
  async function addData() {
    try {
      const res = await sendDataToBackend(emailList);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.emailData);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("inbox");

  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const [isShowingSearchBox, setIsShowingSearchBox] = useState(true);

  const [selectedEmailIds, setSelectedEmailIds] = useState([]);

  const [anchorElForward, setAnchorElForward] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    if (selectedEmailIds.length > 0) {
      dispatch(moveEmailArrayToTrash(selectedEmailIds));
      setSelectedEmailIds([]);
    } else {
      console.log("No emails selected for deletion");
    }
  };

  const handleToggleReadStatus = (selectedEmailIds) => {
    dispatch(toggleReadStatus(selectedEmailIds));
  };

  const handleForward = (event) => {
    setAnchorElForward(event.currentTarget);
  };

  const handleCloseForward = () => {
    setAnchorElForward(null);
  };

  const handleSelectAllToggle = () => {
    // if all selected, then deselect
    if (selectedEmailIds.length === allData.length) {
      setSelectedEmailIds([]);
      // if not all selected, then all select
    } else {
      setSelectedEmailIds(allData.map((email) => email.id));
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    dispatch(fetchAllData());

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const unreadInboxCount = allData.filter((email) => email.status.includes('inbox') && !email.read).length;

  const unreadDraftCount = allData.filter((email) => email.status.includes('draft') && !email.read).length;

  const unreadSpamCount = allData.filter((email) => email.status.includes('spam') && !email.read).length;

  const renderContent = () => {
    const commonProps = {
      setIsShowingSearchBox,
      selectedEmailIds,
      onEmailSelectionChange: setSelectedEmailIds,
    };
    switch (activeTab) {
      case "inbox":
        return (
          <Inbox
            {...commonProps}
            emails={
              allData?.filter((email) => email.status.includes("inbox")) || []
            }
          />
        );
      case "sent":
        return (
          <Sent
            {...commonProps}
            emails={
              allData?.filter((email) => email.status.includes("sent")) || []
            }
          />
        );
      case "draft":
        return (
          <Draft
            {...commonProps}
            emails={
              allData?.filter((email) => email.status.includes("draft")) || []
            }
          />
        );
      case "starred":
        return (
          <Starred
            {...commonProps}
            emails={
              allData?.filter((email) => email.status.includes("starred")) || []
            }
          />
        );
      case "spam":
        return (
          <Spam
            {...commonProps}
            emails={
              allData?.filter((email) => email.status.includes("spam")) || []
            }
          />
        );
      case "trash":
        return (
          <Trash
            {...commonProps}
            emails={
              allData?.filter((email) => email.status.includes("trash")) || []
            }
          />
        );
      case "personal":
        return (
          <Personal
            {...commonProps}
            emails={
              allData?.filter(
                (email) =>
                  email.labels.includes("personal") &&
                  !email.status.includes("spam") &&
                  !email.status.includes("trash")
              ) || []
            }
          />
        );
      case "company":
        return (
          <Company
            {...commonProps}
            emails={
              allData?.filter(
                (email) =>
                  email.labels.includes("company") &&
                  !email.status.includes("spam") &&
                  !email.status.includes("trash")
              ) || []
            }
          />
        );
      case "important":
        return (
          <Important
            {...commonProps}
            emails={
              allData?.filter(
                (email) =>
                  email.labels.includes("important") &&
                  !email.status.includes("spam") &&
                  !email.status.includes("trash")
              ) || []
            }
          />
        );
      case "private":
        return (
          <Private
            {...commonProps}
            emails={
              allData?.filter(
                (email) =>
                  email.labels.includes("private") &&
                  !email.status.includes("spam") &&
                  !email.status.includes("trash")
              ) || []
            }
          />
        );
      default:
        return <Box>Welcome to Your Email</Box>;
    }
  };

  const Icon1 = (props) => (
    <SvgIcon {...props}>
      <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
    </SvgIcon>
  );

  const Icon2 = (props) => (
    <SvgIcon {...props}>
      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z" />
    </SvgIcon>
  );

  const Icon3 = (props) => (
    <SvgIcon {...props}>
      <path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" />
    </SvgIcon>
  );

  const Icon4 = (props) => (
    <SvgIcon {...props}>
      <path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6l-4.286 6z" />
    </SvgIcon>
  );

  return (
    <Box
      className="layout-page-content emailComponent"
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        margin: 0,
        gap: 0,
        overflow: "hidden",
      }}
    >
      {/* left */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        sx={{
          width: "240px",
          "& .MuiDrawer-paper": {
            position: "relative",
            top: "0",
            left: "0",
            width: "240px",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setIsComposeOpen(true)}
          >
            Compose
          </Button>
        </Box>
        <Divider />
        <Box>
          <List>
            <ListItem button onClick={() => setActiveTab("inbox")}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              <Badge badgeContent={unreadInboxCount} color="primary" />
            </ListItem>
            <ListItem button onClick={() => setActiveTab("sent")}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
            <ListItem button onClick={() => setActiveTab("draft")}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Draft" />
              <Badge
                badgeContent={unreadDraftCount}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "rgb(255, 171, 0)",
                    backgroundColor: "rgba(255, 171, 0, 0.16)",
                  },
                }}
              />
            </ListItem>
            <ListItem button onClick={() => setActiveTab("starred")}>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button onClick={() => setActiveTab("spam")}>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Spam" />
              <Badge
                badgeContent={unreadSpamCount}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "rgb(255, 62, 29)",
                    bgcolor: "rgba(255, 62, 29, 0.16)",
                  },
                }}
              />
            </ListItem>
            <ListItem button onClick={() => setActiveTab("trash")}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
          </List>
        </Box>
        <Typography sx={{ mt: 2, ml: 5 }} variant="caption">
          LABELS
        </Typography>
        <List>
          <ListItem button onClick={() => setActiveTab("personal")}>
            <ListItemIcon sx={{ color: "rgb(255, 171, 0)" }}>
              <CircleIcon sx={{ width: "1rem", height: "1rem" }} />
            </ListItemIcon>
            <ListItemText primary="Personal" />
          </ListItem>
          <ListItem button onClick={() => setActiveTab("company")}>
            <ListItemIcon sx={{ color: "rgb(113, 221, 55)" }}>
              <CircleIcon sx={{ width: "1rem", height: "1rem" }} />
            </ListItemIcon>
            <ListItemText primary="Company" />
          </ListItem>
          <ListItem button onClick={() => setActiveTab("important")}>
            <ListItemIcon sx={{ color: "rgb(105, 108, 255)" }}>
              <CircleIcon sx={{ width: "1rem", height: "1rem" }} />
            </ListItemIcon>
            <ListItemText primary="Important" />
          </ListItem>
          <ListItem button onClick={() => setActiveTab("private")}>
            <ListItemIcon sx={{ color: "rgb(255, 62, 29)" }}>
              <CircleIcon sx={{ width: "1rem", height: "1rem" }} />
            </ListItemIcon>
            <ListItemText primary="Private" />
          </ListItem>
        </List>
      </Drawer>

      {/* right */}
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {isShowingSearchBox && (
          <>
            <SearchBox />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px",
                backgroundColor: "white",
                mb: -2,
                border: "0.05rem solid #e0e0e0",
              }}
            >
              <Box>
                <Checkbox
                  color="primary"
                  checked={selectedEmailIds.length === allData?.length}
                  // visual state that is neither checked nor unchecked
                  indeterminate={
                    selectedEmailIds.length > 0 &&
                    selectedEmailIds.length < allData.length
                  }
                  onChange={handleSelectAllToggle}
                  inputProps={{ "aria-label": "select all emails" }}
                />
                {selectedEmailIds.length > 0 && (
                  <Box>
                    <IconButton size="median" onClick={handleDelete}>
                      <Icon1 />
                    </IconButton>
                    <IconButton size="median" onClick={handleToggleReadStatus}>
                      <Icon2 />
                    </IconButton>
                    <IconButton size="median">
                      <Icon3 />
                    </IconButton>
                    <IconButton size="median" onClick={handleForward}>
                      <Icon4 />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorElForward}
                      keepMounted
                      open={Boolean(anchorElForward)}
                      onClose={handleCloseForward}
                    >
                      <MenuItem onClick={handleCloseForward}>
                        <ListItemIcon>
                          <CircleIcon
                            sx={{
                              width: "1rem",
                              height: "1rem",
                              color: "rgb(255, 171, 0)",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Personal" sx={{ ml: -5 }} />
                      </MenuItem>
                      <MenuItem onClick={handleCloseForward}>
                        <ListItemIcon>
                          <CircleIcon
                            sx={{
                              width: "1rem",
                              height: "1rem",
                              color: "rgb(113, 221, 55)",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Company" sx={{ ml: -5 }} />
                      </MenuItem>
                      <MenuItem onClick={handleCloseForward}>
                        <ListItemIcon>
                          <CircleIcon
                            sx={{
                              width: "1rem",
                              height: "1rem",
                              color: "rgb(105, 108, 255)",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Important" sx={{ ml: -5 }} />
                      </MenuItem>
                      <MenuItem onClick={handleCloseForward}>
                        <ListItemIcon>
                          <CircleIcon
                            sx={{
                              width: "1rem",
                              height: "1rem",
                              color: "rgb(255, 62, 29)",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Private" sx={{ ml: -5 }} />
                      </MenuItem>
                    </Menu>
                  </Box>
                )}
              </Box>
              <Box>
                <IconButton aria-label="refresh" onClick={handleRefresh}>
                  <RefreshIcon />
                </IconButton>
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </Box>
          </>
        )}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            bgcolor: "white",
            position: "relative",
          }}
        >
          {renderContent()}
          <Backdrop
            sx={{
              color: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Box>
      <button onClick={addData}>addData</button>
      <ComposeWindow
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
      />
    </Box>
  );
};

export default Email;
