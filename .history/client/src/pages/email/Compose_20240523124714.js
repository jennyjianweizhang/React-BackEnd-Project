import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Box,
  Autocomplete,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactQuill from "react-quill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from '@mui/icons-material/Delete';
import "react-quill/dist/quill.snow.css";

const ComposeWindow = ({ isOpen, onClose }) => {
  const [body, setBody] = useState("");
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSendEmail = () => {
    console.log("Email sent!");
    onClose();
  };

  const handleSaveAsDraft = () => {
    handleClose();
    console.log("Saved as draft");
    onClose();
  };

  const handleScheduleSend = () => {
    handleClose();
    console.log("Schedule send modal open");
    onClose();
  };

  const handleDelete = () => {
    console.log("Email discarded");
    onClose(); 
  };



  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Compose Mail
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Stack
          direction="column"
          spacing={2}
          style={{ height: "350px", marginBottom: "20px" }}
        >
           <Autocomplete
            freeSolo
            id="email-to"
            options={emailList}
            getOptionLabel={(option) => `${option.name} <${option.email}>`} 
            renderOption={(props, option) => (
              <Box component="li" {...props} key={option.id} sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={option.avatar} sx={{ marginRight: 2, width: 24, height: 24 }} />
                {`${option.name} <${option.email}>`}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              onClick={() => setShowCc(!showCc)}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Cc
            </Typography>
            <Typography>|</Typography>
            <Typography
              onClick={() => setShowBcc(!showBcc)}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Bcc
            </Typography>
          </Stack>
          {showCc && (
            <TextField
              margin="dense"
              id="cc"
              label="Cc"
              type="email"
              fullWidth
              variant="outlined"
            />
          )}
          {showBcc && (
            <TextField
              margin="dense"
              id="bcc"
              label="Bcc"
              type="email"
              fullWidth
              variant="outlined"
            />
          )}
          <TextField
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            variant="outlined"
          />
          <ReactQuill
            theme="snow"
            value={body}
            onChange={setBody}
            style={{ height: "150px", marginBottom: "20px" }}
          />
        </Stack>
      </DialogContent>
      <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ margin: 2, '& > :not(style) + :not(style)': { ml: -1.5 } }}>
      <Button 
          startIcon={<DeleteIcon />} 
          onClick={handleDelete} 
          sx={{ ml: 0 }}
        >
        </Button>
        <Box>
        <Button variant="contained" color="primary" onClick={handleSendEmail} sx={{marginRight:'-10px'}}>
          Send
        </Button>
        <Button 
          variant="contained" color="primary" 
          onClick={handleClick}
          sx={{marginRight:'4px'}}
        >
          <ArrowDropDownIcon/>
        </Button>
        <Menu
          id="send-options-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleSaveAsDraft}>Save as Draft</MenuItem>
          <MenuItem onClick={handleScheduleSend}>Schedule Send</MenuItem>
        </Menu>
        </Box>
        
      </Stack>
    </Dialog>
  );
};

export default ComposeWindow;
