import { Box, Typography } from "@mui/material";
import circle from "../../static/images/Circle.png";
import q2logo from "../../static/images/q2-logo.png";

const Nav = () => {
  return (
    <Box
      sx={{
        margin: "3em 6em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "38px",
            width: "38px",
            marginRight: "34px",
          }}
        >
          <img src={q2logo} alt="logo" />
        </Box>
        <Typography
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "50px",
            color: "#1F1F1F",
          }}
        >
           
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "GilroyRegular",
          fontSize: "25px",
          color: "#FC5339",
        }}
      >
        Smart Financial Advisor
      </Typography>
    </Box>
  );
};

export default Nav;
