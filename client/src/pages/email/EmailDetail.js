import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Divider,
  SvgIcon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DotsVertical from "mdi-material-ui/DotsVertical";
import CircleIcon from "@mui/icons-material/Circle";
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';

import {
  moveToTrash,
  toggleReadStatus,
  moveToStarred,
} from "src/store/emailData";

const EmailDetail = ({ emailId, emailList, onClose, onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElForward, setAnchorElForward] = useState(null);

  const emailIndex = emailList.findIndex((email) => email.id === emailId);
  const hasNext = emailIndex < emailList.length - 1;
  const hasPrevious = emailIndex > 0;

  useEffect(() => {
    setEmail(emailList[emailIndex]);
    if (emailIndex === -1) {
      console.log("Email not found for ID:", emailId);
      onClose();
    }
  }, [emailId, emailList, emailIndex, onClose]);

  const handleDelete = (emailId) => {
    dispatch(moveToTrash(emailId));
    onClose();
  };

  const handleToggleReadStatus = (emailId) => {
    dispatch(toggleReadStatus(emailId));
  };

  const toggleStar = (event, emailId) => {
    event.stopPropagation();
    dispatch(moveToStarred(emailId));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleForward = (event) => {
    setAnchorElForward(event.currentTarget);
  };
  
  const handleCloseForward = () => {
    setAnchorElForward(null);
  };

  if (!email) {
    return (
      <Typography variant="body1">
        Email not found or has been deleted.
      </Typography>
    );
  }

  const labelStyles = {
    personal: {
      bgcolor: "rgba(255, 171, 0, 0.16)",
      color: "rgb(255, 171, 0)",
    },
    private: {
      bgcolor: "rgba(255, 62, 29, 0.16)",
      color: "rgb(255, 62, 29)",
    },
    important: {
      bgcolor: "rgba(105, 108, 255, 0.16)",
      color: "rgb(105, 108, 255)",
    },
    company: {
      bgcolor: "rgba(113, 221, 55, 0.16)",
      color: "rgb(113, 221, 55)",
    },
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

  const AdditionalIcon1 = (props) => (
    <SvgIcon {...props}>
      <path d="m6.516 14.323l-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454l-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315l-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385l-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603l1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962l4.09-.326z" />
    </SvgIcon>
  );

  const AdditionalIcon2 = (props) => (
    <SvgIcon {...props}>
      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z" />
    </SvgIcon>
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "25px 15px 10px 15px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <IconButton onClick={onClose} size="small" sx={{ marginRight: 1 }}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="body1" noWrap>
            {email.message}
          </Typography>
          <Box sx={{ ml: 2 }}>
            {email.labels &&
              email.labels.map((label, index) => (
                <Box
                  key={index}
                  sx={{
                    ...labelStyles[label],
                    padding: "6px 10px",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    lineHeight: "normal",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </Box>
              ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            onClick={() =>
              hasPrevious ? onPrevious(emailList[emailIndex - 1].id) : null
            }
            size="small"
            disabled={!hasPrevious}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              hasNext ? onNext(emailList[emailIndex + 1].id) : null
            }
            size="small"
            disabled={!hasNext}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(50, 71, 92, 0.12)",
          borderBottom: "1px solid rgba(50, 71, 92, 0.12)",
          padding: "5px 15px 5px 15px",
        }}
      >
        <Box>
          <IconButton size="median" onClick={() => handleDelete(email.id)}>
            <Icon1 />
          </IconButton>
          <IconButton
            size="median"
            onClick={() => handleToggleReadStatus(email.id)}
          >
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
              <ListItemText primary="Personal" sx={{ml:-5}}/>
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
              <ListItemText primary="Company" sx={{ml:-5}}/>
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
              <ListItemText primary="Important" sx={{ml:-5}}/>
            </MenuItem>
            <MenuItem onClick={handleCloseForward}>
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    color: "rgb(255, 62, 29)"
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Private" sx={{ml:-5}}/>
            </MenuItem>
          </Menu>
        </Box>
        <Box>
          <IconButton size="median">
            <IconButton onClick={(event) => toggleStar(event, email.id)}>
              {email.status.includes("starred") ? (
                <StarIcon />
              ) : (
                <StarBorderIcon />
              )}
            </IconButton>
          </IconButton>
          <IconButton size="median">
            <AdditionalIcon2 />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          p: 5,
          bgcolor: "rgba(58, 53, 65, 0.08)",
        }}
      >
        <Box sx={{ bgcolor: "white", borderRadius: "3px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "1.5rem",
              borderBottom: "1px solid rgba(50, 71, 92, 0.12)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
                padding: "22px 22px 2px 14px",
              }}
            >
              <Avatar
                src={email.avatar}
                sx={{ width: 40, height: 40, marginLeft: "1rem" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1rem",
                }}
              >
                <Typography variant="body2">{email.name}</Typography>
                <Typography variant="body2">{email.email}</Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="caption" sx={{ marginLeft: 1 }}>
                {email.detailedDate}
              </Typography>
              <IconButton
                size="small"
                aria-label="settings"
                className="card-more-options"
                sx={{ color: "text.secondary" }}
                onClick={handleClick}
              >
                <DotsVertical />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><ReplyIcon/>Reply</MenuItem>
                <MenuItem onClick={handleClose}><ForwardIcon/>Forward</MenuItem>
              </Menu>
            </Box>
          </Box>

          <Typography
            variant="body1"
            paragraph
            sx={{ margin: "1rem 2rem 2rem 2rem" }}
          >
            {email.content}
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            bgcolor: "white",
            borderRadius: "3px",
          }}
        >
          <Typography variant="body1">
            Click here to{" "}
            <span style={{ cursor: "pointer", color: "rgb(105, 108, 255)" }}>
              Reply
            </span>{" "}
            or{" "}
            <span style={{ cursor: "pointer", color: "rgb(105, 108, 255)" }}>
              Forward
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailDetail;
