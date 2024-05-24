import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, InputAdornment, useTheme, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { setSearchTerm } from "src/store/emailData";

export const selectSearchTerm = (state) => state.emailData.searchTerm;

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TextField
      fullWidth
      placeholder="Search mail"
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      InputProps={{
        startAdornment: (
          <InputAdornment sx={{ ml: isMobile ? 10 : 0 }}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      sx={{
        ".MuiOutlinedInput-root": {
          borderRadius: "0 0.2rem 0 0",
          backgroundColor: "white",
        },
        ".MuiInputBase-input": {
          height: "1.5em",
        },
      }}
    />
  );
};

export default SearchBox;
