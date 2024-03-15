import React, { useState } from "react";
import {
  Grid,
  Avatar,
  CardContent,
  Card,
  CardHeader,
  Chip,
  CircularProgress,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Menu,
  MenuItem
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function TeamMembers() {
  const teamMembers = [
    {
      name: "Nathan Wagner",
      role: "iOS Developer",
      project: "Zipcar",
      tasks: "87/135",
      progress: 58,
      avatar: "http://127.0.0.1:8000/avatars/avatar-14.png",
      projectColor: "rgb(105, 108, 255)",
      bgcolor: "rgb(105, 108, 255, 0.16)",
    },
    {
      name: "Emma Bowen",
      role: "UI/UX Designer",
      project: "Bitbank",
      tasks: "340/420",
      progress: 80,
      avatar: "http://127.0.0.1:8000/avatars/avatar-15.png",
      projectColor: "rgb(255, 62, 29)",
      bgcolor: "rgb(255, 62, 29, 0.16)",
    },
    {
      name: "Liam Smith",
      role: "Frontend Developer",
      project: "Streamline",
      tasks: "112/150",
      progress: 75,
      avatar: "http://127.0.0.1:8000/avatars/avatar-13.png",
      projectColor: "rgb(255, 171, 0)",
      bgcolor: "rgb(255, 171, 0, 0.16)",
    },
    {
      name: "Sophia Johnson",
      role: "Backend Developer",
      project: "Innovate",
      tasks: "97/120",
      progress: 81,
      avatar: "http://127.0.0.1:8000/avatars/avatar-12.png",
      projectColor: "rgb(3, 195, 236)",
      bgcolor: "rgb(3, 195, 236, 0.16)",
    },
    {
      name: "Ethan Williams",
      role: "Project Manager",
      project: "BuildIt",
      tasks: "300/300",
      progress: 100,
      avatar: "http://127.0.0.1:8000/avatars/avatar-11.png",
      projectColor: "rgb(133, 146, 163)",
      bgcolor: "rgb(133, 146, 163, 0.16)",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <Card>
        <CardHeader
          title="Team Members"
          titleTypographyProps={{
            sx: {
              lineHeight: "1.2 !important",
              letterSpacing: "0.31px !important",
            },
          }}
          action={
            <IconButton
            aria-haspopup="true" onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Refresh</MenuItem>
          <MenuItem onClick={handleClose}>Share</MenuItem>
          <MenuItem onClick={handleClose}>Update</MenuItem>
        </Menu>
        <CardContent sx={{marginTop:'-10px'}}>
          <TableContainer component={Paper} elevation={6}>
            <Table aria-label="team members">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>Tasks</TableCell>
                  <TableCell>Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={member.avatar} alt={member.name} />
                        <Typography
                          variant="body1"
                          style={{
                            marginLeft: "10px",
                            color: "rgba(50, 71, 92, 0.87)",
                          }}
                        >
                          {member.name}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Typography
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(50, 71, 92, 0.38)",
                        }}
                      >
                        {member.role}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={member.project}
                        sx={{
                          color: member.projectColor,
                          bgcolor: member.bgcolor,
                        }}
                      />
                    </TableCell>
                    <TableCell>{member.tasks}</TableCell>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CircularProgress
                          variant="determinate"
                          value={100} 
                          size={28}
                          thickness={7} 
                          style={{
                            color: "rgba(50, 71, 92, 0.38)", 
                            marginLeft:"15px",
                            zIndex: 1,
                          }}
                        />
                        <CircularProgress
                          variant="determinate"
                          value={member.progress}
                          size={28}
                          thickness={7} 
                          style={{
                            color: member.projectColor,
                            marginLeft: "-28px",
                            zIndex: 2, 
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TeamMembers;
