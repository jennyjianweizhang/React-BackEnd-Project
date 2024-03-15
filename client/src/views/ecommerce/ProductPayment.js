import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SvgOne = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    fontSize="16"
    className="iconify iconify--bx"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"
    ></path>
    <circle cx="11.75" cy="18" r="1" fill="currentColor"></circle>
  </svg>
);
SvgOne.displayName = "SvgOne";

const SvgTwo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    fontSize="16"
    className="iconify iconify--bx"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"
    ></path>
    <path fill="currentColor" d="M11 6h2v6h-2z"></path>
  </svg>
);
SvgTwo.displayName = "SvgTwo";

const SvgThree = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    fontSize="16"
    className="iconify iconify--bx"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"
    ></path>
  </svg>
);
SvgThree.displayName = "SvgThree";

const SvgFour = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    fontSize="16"
    className="iconify iconify--bx"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M20 6h-5.586l2.293-2.293l-1.414-1.414L12 5.586L8.707 2.293L7.293 3.707L9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4 19V8h16l.002 11H4z"
    ></path>
  </svg>
);
SvgFour.displayName = "SvgFour";

const getColor = (svgComponent) => {
  switch (svgComponent.displayName) {
    case "SvgOne":
      return {
        color: "rgb(105, 108, 255)",
        backgroundColor: "rgba(105, 108, 255, 0.16)",
      };
    case "SvgTwo":
      return {
        color: "rgb(255, 171, 0)",
        backgroundColor: "rgba(255, 171, 0, 0.16)",
      };
    case "SvgThree":
      return {
        color: "rgb(3, 195, 236)",
        backgroundColor: "rgba(3, 195, 236, 0.16)",
      };
    default:
      return {
        color: "rgb(255, 62, 29)",
        backgroundColor: "rgba(255, 62, 29, 0.16)",
      };
  }
};

const { color, backgroundColor } = getColor;

const getStatusStyles = (status) => {
  switch (status) {
    case "CONFIRMED":
      return {
        colors: "rgb(105, 108, 255)",
        bgcolors: "rgba(105, 108, 255, 0.16)",
      };
    case "COMPLETED":
      return {
        colors: "rgb(113, 221, 55)",
        bgcolors: "rgba(113, 221, 55, 0.16)",
      };
    default:
      return {
        colors: "rgb(255, 62, 29)",
        bgcolors: "rgba(255, 62, 29, 0.16)",
      };
  }
};

const { colors, bgcolors } = getStatusStyles;

const ProducPaidData = [
  {
    id: 1,
    productName: "OnePlus 7Pro",
    productCategory: "OnePlus",
    category: "Smart Phone",
    paidAmount: "$120",
    unpaidAmount: "/$499",
    paidStatus: "Partially Paid",
    orderStatus: "CONFIRMED",
    avatarSrc: SvgOne,

    productSrc: "http://127.0.0.1:8000/products/oneplus-7pro-light.png",
  },
  {
    id: 2,
    productName: "Magic Mouse",
    productCategory: "Apple",
    category: "Mouse",
    paidAmount: "$149",
    unpaidAmount: "",
    paidStatus: "Fully Paid",
    orderStatus: "COMPLETED",
    avatarSrc: SvgTwo,
    productSrc: "http://127.0.0.1:8000/products/apple-magic-mouse-light.png",
  },
  {
    id: 3,
    productName: "iMac Pro",
    productCategory: "Apple",
    category: "Computer",
    paidAmount: "$0",
    unpaidAmount: "/$899",
    paidStatus: "Unpaid",
    orderStatus: "CANCELLED",
    avatarSrc: SvgThree,
    productSrc: "http://127.0.0.1:8000/products/apple-iMac-pro-light.png",
  },
  {
    id: 4,
    productName: "Note 10",
    productCategory: "Samsung",
    category: "Smart Phone",
    paidAmount: "$169",
    unpaidAmount: "",
    paidStatus: "Fully Paid",
    orderStatus: "COMPLETED",
    avatarSrc: SvgOne,
    productSrc: "http://127.0.0.1:8000/products/samsung-note-10-light.png",
  },
  {
    id: 5,
    productName: "iPhone 11 Pro",
    productCategory: "Apple",
    category: "Smart Phone",
    paidAmount: "$399",
    unpaidAmount: "",
    paidStatus: "Fully Paid",
    orderStatus: "COMPLETED",
    avatarSrc: SvgOne,
    productSrc: "http://127.0.0.1:8000/products/apple-iPhone-11-pro-light.png",
  },
  {
    id: 6,
    productName: "Mi Led TV 4X",
    productCategory: "Xiaomi",
    category: "Smart TV",
    paidAmount: "$349",
    unpaidAmount: "/$2599",
    paidStatus: "Partially Paid",
    orderStatus: "CONFIRMED",
    avatarSrc: SvgFour,
    productSrc: "http://127.0.0.1:8000/products/mi-led-tv-4x-light.png",
  },
  {
    id: 7,
    productName: "Logitech MX",
    productCategory: "Logitech",
    category: "Mouse",
    paidAmount: "$89",
    unpaidAmount: "",
    paidStatus: "Fully Paid",
    orderStatus: "COMPLETED",
    avatarSrc: SvgTwo,
    productSrc: "http://127.0.0.1:8000/products/logitech-mx-light.png",
  },
];

const ProductPaid = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <TableContainer component={Paper} elevation={6}>
        <Table>
          <TableHead>
            <TableRow sx={{ height: "2rem" }}>
              <TableCell>PRODUCT</TableCell>
              <TableCell>CATEGORY</TableCell>
              <TableCell>PAYMENT</TableCell>
              <TableCell>ORDER STATUS</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ProducPaidData.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    // spacing={2}
                    sx={{ flexWrap: "nowrap" }}
                  >
                    <Box>
                      <Avatar
                        src={product.productSrc}
                        alt={product.productName}
                      />
                    </Box>
                    <Box sx={{ width: "7rem", marginLeft: "0.8rem" }}>
                      <Typography
                        sx={{
                          color: "rgba(50, 71, 92, 0.6)",
                          fontWeight: "600",
                          fontSize:'0.9rem',
                          lineHeight:'1.2'
                        }}
                      >
                        {product.productName}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(50, 71, 92, 0.38)" }}
                      >
                        {product.productCategory}
                      </Typography>
                    </Box>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      width: "8.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        marginRight: "0.5rem",
                        backgroundColor: getColor(product.avatarSrc)
                          .backgroundColor,
                        color: getColor(product.avatarSrc).color,
                        width: "2rem",
                        height: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <product.avatarSrc />
                    </Box>
                    {product.category}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ color: "rgba(50, 71, 92, 0.38)", fontWeight: "600", width:'7rem' }}>
                    <Typography
                      component="span"
                      sx={{ color: "rgb(105, 108, 255)", fontWeight: "600" }}
                    >
                      {product.paidAmount}
                    </Typography>
                    {product.unpaidAmount}
                    <Typography sx={{ color: "rgba(50, 71, 92, 0.38)", fontSize:'0.875rem', lineHeight:'1.2'}}>
                      {product.paidStatus}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{width:'5.8rem'}}><Box
                    sx={{
                      color: getStatusStyles(product.orderStatus).colors,
                      backgroundColor: getStatusStyles(product.orderStatus)
                        .bgcolors,
                      padding: "0.3rem 0.4rem",
                      borderRadius: "0.1rem",
                      fontSize:' 0.75rem',
                      textAlign:'center'
                    }}
                  >
                    {product.orderStatus}
                  </Box></Box>
                  
                </TableCell>

                <TableCell>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={(event) => handleClick(event, product.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <span
                        style={{ marginRight: "0.5rem", marginTop: "0.4rem" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          fontSize="20"
                          className="iconify iconify--bx"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"
                          ></path>
                        </svg>
                      </span>
                      View Details
                    </MenuItem>
                    <MenuItem onClick={handleClose}><span
                        style={{ marginRight: "0.5rem", marginTop: "0.2rem" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" fontSize="20" className="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-1V2H6v5H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h2v3h12v-3h2c1.103 0 2-.897 2-2v-7c0-1.654-1.346-3-3-3zM8 4h8v3H8V4zm8 16H8v-4h8v4zm4-3h-2v-3H6v3H4v-7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1v7z"></path><path fill="currentColor" d="M14 10h4v2h-4z"></path></svg>
                      </span>Print Invoice</MenuItem>
                    <MenuItem onClick={handleClose}><span
                        style={{ marginRight: "0.5rem", marginTop: "0.2rem" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" fontSize="20" className="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"></circle><circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"></circle><path fill="currentColor" d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path fill="currentColor" d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
                      </span>Buy Again</MenuItem>
                    <MenuItem onClick={handleClose}><span style={{ marginRight: "0.5rem", marginTop: "0.2rem" }}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" fontSize="20" className="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path></svg></span>Delete History</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ProductPaid;
