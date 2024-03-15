import React, {useState} from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  IconButton,
  Avatar,
  Menu, 
  MenuItem
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ActivityTimelineCard = () => {
  const activities = [
    {
      type: "invoice",
      title: "12 Invoices have been paid",
      time: "12 min ago",
      detail: "Invoices have been paid to the company",
      fileName: "Invoices.pdf",
      fileSrc: "http://127.0.0.1:8000/cards/pdf.png",
      dotColor: "primary",
    },
    {
      title: "Client Meeting",
      time: "45 min ago",
      detail: "Project meeting with John @10:15am",
      type: "meeting",
      avatarSrc: "http://127.0.0.1:8000/avatars/avatar-3.png",
      personName: "Steven Nash (Client)",
      personDetail: "CEO of ThemeSelection",
      dotColor: "warning",
    },
    {
      title: "Create a new project for client",
      time: "2 days ago",
      detail: "5 team members in a project",
      type: "project",
      teamMembers: [
        { name: "Howard Lloyd", avatarSrc: "http://127.0.0.1:8000/avatars/avatar-5.png" },
        { name: "Katie Lane", avatarSrc: "http://127.0.0.1:8000/avatars/avatar-12.png" },
        { name: "George Allen", avatarSrc: "http://127.0.0.1:8000/avatars/avatar-9.png" },
        { name: "Alice Cobb", avatarSrc: "http://127.0.0.1:8000/avatars/avatar-6.png" },
        { name: "Jeffery Warner", avatarSrc: "http://127.0.0.1:8000/avatars/avatar-14.png" },
      ],
      dotColor: "info",
    },
  ];

  const TeamMember = ({ member }) => {
    const [showName, setShowName] = useState(false);
  
    const handleMouseEnter = () => setShowName(true);
    const handleMouseLeave = () => setShowName(false);
  
    return (
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
        transition: 'transform 0.3s ease-in-out',
      }}>
        <Avatar src={member.avatarSrc} sx={{ width: 34, height: 34 }} />
        {showName && (
          <Typography variant="caption" sx={{
            position: 'absolute',
            left:15,
            bottom: -40,
            transform: 'translateX(-50%)',
            width: 120,
            height:25,
            color:'white',
            backgroundColor: '#2f4f4f',
            textAlign: 'center',
            fontSize: '14px',
            borderRadius: '5px'
          }}>
            {member.name}
          </Typography>
        )}
      </Box>
    );
  };

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
          title="Activity Timeline"
          action={
            <IconButton aria-haspopup="true" onClick={handleClick}>
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
          <MenuItem onClick={handleClose}>Share timeline</MenuItem>
          <MenuItem onClick={handleClose}>Suggest edits</MenuItem>
          <MenuItem onClick={handleClose}>Report bug</MenuItem>
        </Menu>
        <CardContent>
          <Timeline position="right" sx={{ marginLeft: -113, marginTop: -1 }}>
            {activities.map((activity, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color={activity.dotColor} />
                  {index < activities.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Box sx={{position:'relative'}}>
                    <Typography variant="body1" sx={{color: 'rgba(50, 71, 92, 0.87)'}}>{activity.title}</Typography>
                    <Typography variant="body2" sx={{position:"absolute", right: -12, color:'rgba(50, 71, 92, 0.38)'}}>{activity.time}</Typography>
                  </Box>
                  <Typography variant="body1" sx={{color: 'rgba(50, 71, 92, 0.6)', marginBottom: 3}}>{activity.detail}</Typography>

                  {activity.type === "invoice" && (
                    <Box display="flex" alignItems="center">
                      <img
                        width="24"
                        height="24"
                        alt={activity.fileName}
                        src={activity.fileSrc}
                      />
                      <Typography variant="body1" ml={1} sx={{color: 'rgba(50, 71, 92, 0.87)', fontWeight: 500}}>
                        {activity.fileName}
                      </Typography>
                    </Box>
                  )}

                  {activity.type === "meeting" && (
                    <Box display="flex" alignItems="center">
                      <Avatar src={activity.avatarSrc} />
                      <Box ml={1}>
                        <Typography variant="body1" sx={{color: 'rgba(50, 71, 92, 0.87)', fontWeight: 500}}>
                          {activity.personName}
                        </Typography>
                        <Typography variant="body2">
                          {activity.personDetail}
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  {activity.type === "project" && (
                    <Box display="flex" alignItems="center">
                      {activity.teamMembers.map((member, memberIndex) => (
                        // <Avatar key={memberIndex} src={member.avatarSrc} />
                        <TeamMember key={index} member={member} />
                      ))}
                    </Box>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ActivityTimelineCard;
