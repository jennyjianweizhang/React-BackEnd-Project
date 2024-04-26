import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  IconButton,
  Typography,
  Box,
  Checkbox,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ReportIcon from "@mui/icons-material/Report";
import {
  moveToTrash,
  toggleReadStatus,
  moveToSpam,
  moveToStarred,
} from "src/store/emailData";
import EmailDetail from "./EmailDetail";
import { selectSearchTerm } from "./Search";

const Starred = ({
  setIsShowingSearchBox,
  selectedEmailIds,
  onEmailSelectionChange,
  emails,
}) => {
  const [hoveredEmailId, setHoveredEmailId] = useState(null);

  const toggleStar = (event, emailId) => {
    event.stopPropagation();
    dispatch(moveToStarred(emailId));
  };

  const emailItemStyle = {
    border: "0.05rem solid #e0e0e0",
    padding: "16px",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.2)",
      backgroundColor: "#f5f5f5",
    },
    cursor: "pointer",
  };

  // const starEmails = useSelector((state) =>
  //   state.emailData.allData.filter((email) => email.status.includes("starred"))
  // );

  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const filteredEmails = emails.filter(
    (email) =>
      email.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = (emailId) => {
    dispatch(moveToTrash(emailId));
  };

  const handleToggleReadStatus = (event, emailId) => {
    event.stopPropagation();
    dispatch(toggleReadStatus(emailId));
  };

  const handleSpam = (emailId) => {
    dispatch(moveToSpam(emailId));
  };

  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const handleEmailClick = (emailId) => {
    setSelectedEmailId(emailId);
    setIsShowingSearchBox(false);
  };

  const handleNextEmail = (nextId) => {
    setSelectedEmailId(nextId);
  };

  const handlePreviousEmail = (prevId) => {
    setSelectedEmailId(prevId);
  };

  const handleEmailSelectionChange = (emailId) => {
    // If the email is already selected, deselect it
    if (selectedEmailIds.includes(emailId)) {
      onEmailSelectionChange(selectedEmailIds.filter((id) => id !== emailId));
    } else {
      // If the email is not currently selected, select it
      onEmailSelectionChange([...selectedEmailIds, emailId]);
    }
  };

  const labelColors = {
    personal: "rgb(255, 171, 0)",
    company: "rgb(113, 221, 55)",
    private: "rgb(255, 62, 29)",
    important: "rgb(105, 108, 255)",
  };

  return (
    <Box className="mailbox-container">
      <div className="scrollbar-container">
        {selectedEmailId == null ? (
          filteredEmails.length > 0 ? (
            <List>
              {filteredEmails.map((email) => (
                <ListItem
                  key={email.id}
                  className="email-item"
                  sx={{
                    ...emailItemStyle,
                    backgroundColor: email.read ? "#fff" : "#f5f5f5",
                  }}
                  onMouseEnter={() => setHoveredEmailId(email.id)}
                  onMouseLeave={() => setHoveredEmailId(null)}
                  onClick={() => handleEmailClick(email.id)}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    gap={2}
                  >
                    {/* left */}
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                      flexGrow={1}
                    >
                      <Checkbox
                        checked={selectedEmailIds.includes(email.id)}
                        onChange={() => handleEmailSelectionChange(email.id)}
                        onClick={(event) => event.stopPropagation()}
                      />
                      <IconButton>
                        <IconButton
                          onClick={(event) => toggleStar(event, email.id)}
                        >
                          {email.status.includes("starred") ? (
                            <StarIcon />
                          ) : (
                            <StarBorderIcon />
                          )}
                        </IconButton>
                      </IconButton>
                      <Avatar src={email.avatar} alt={email.name} />
                      <Box flexGrow={1}>
                        <Typography>{email.name}</Typography>
                        <Typography variant="body2" noWrap>
                          {email.message}
                        </Typography>
                      </Box>
                    </Box>

                    {/* right */}
                    <Box display="flex" alignItems="center" gap={1}>
                      {hoveredEmailId === email.id ? (
                        <Box>
                          <IconButton
                            aria-label="Delete Mail"
                            onClick={() => handleDelete(email.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton
                            onClick={(event) =>
                              handleToggleReadStatus(event, email.id)
                            }
                          >
                            {email.read ? <DraftsIcon /> : <MarkunreadIcon />}
                          </IconButton>
                          <IconButton
                            aria-label="Move to Spam"
                            onClick={() => handleSpam(email.id)}
                          >
                            <ReportIcon />
                          </IconButton>
                        </Box>
                      ) : (
                        <Typography
                          variant="caption"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          {email.labels.map((label, index) => (
                            <Box
                              key={index}
                              sx={{
                                width: 10,
                                height: 10,
                                bgcolor: labelColors[label],
                                borderRadius: "50%",
                                marginRight: 3,
                              }}
                            />
                          ))}
                          {email.time}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography sx={{ mx: 2, my: 2 }}>No Mails Found</Typography>
          )
        ) : (
          <EmailDetail
            emailId={selectedEmailId}
            emailList={emails}
            onClose={() => {
              setSelectedEmailId(null);
              setIsShowingSearchBox(true);
            }}
            onNext={handleNextEmail}
            onPrevious={handlePreviousEmail}
          />
        )}
      </div>
    </Box>
  );
};

export default Starred;
