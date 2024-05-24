import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { setSearchTerm } from "src/store/emailData";

export const selectSearchTerm = (state) => state.emailData.searchTerm;

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <TextField
      fullWidth
      placeholder="Search mail"
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      InputProps={{
        startAdornment: (
          <InputAdornment sx={{ml:5}}>
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
          ml:5,
          height: "1.5em",
        },
      }}
    />
  );
};

export default SearchBox;
