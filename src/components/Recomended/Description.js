import { Box, Button, Icon, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CancelIcon from "@mui/icons-material/Cancel";
import HSBar from "react-horizontal-stacked-bar-chart";
import Confetti from 'react-confetti'
import {useCallback, useEffect, useState} from "react";

const Description = ({
  setOpen,
  series,
  labels,
  colors,
  firstLevelData,
  information,
  setLabels,
  setSeries,
  setColors,
}) => {
  const [confetti, setConfetti] = useState(true);
  const total = series.reduce((a, b) => a + b);
  let seriesPercentage = [];
  series.map((value, index) =>
    seriesPercentage.push({
      value: parseFloat(((value * 100) / total).toFixed(1)),
      color: colors[index],
      description: ((value * 100) / total).toFixed(1) + " %",
    })
  );

  const componentDidMount = useCallback(() => {
    setTimeout(() => {
      setConfetti(false);
    }, 8000)
  }, [setConfetti]);
  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);
  return (
    <>
    
    <Box sx={{ width: "100%" }}>
    {confetti && (<Confetti
      //width={100}
      //height={100}
      tweenDuration = {1000}
      numberOfPieces = {400}
      
    />)}
      <Box
        sx={{
          border: "1.3px solid #E2E2E2",
          borderRadius: "10px",
          padding: "1em",
          margin: "1em 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1em",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Typography>
            <Typography component={"span"} sx={{ fontWeight: "bold" }}>
              {firstLevelData[0] && firstLevelData[0].name}:
            </Typography>{" "}
            $ {firstLevelData[0] && firstLevelData[0].value} 
          </Typography>
          <Typography>
            <Typography component={"span"} sx={{ fontWeight: "bold" }}>
              {firstLevelData[1] && firstLevelData[1].name}:
            </Typography>{" "}
            $ {firstLevelData[1] && firstLevelData[1].value} 
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "1em" }}>
        <Typography sx={{ fontFamily: "GilroyRegular", fontSize: "25px" }}>
          <Typography
            component={"span"}
            sx={{
              color: "#1F1F1F",
              //textDecoration: "underline",
              fontFamily: "GilroyRegular",
              fontSize: "25px",
            }}
          >
            Your
          </Typography>{" "}
          recommended plan
          <Icon>
            <ArrowForwardIcon />
          </Icon>
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1.3px solid #E2E2E2",
          borderRadius: "10px",
          padding: "1em",
          margin: "1em 0",
        }}
      >
        <Box sx={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
          {seriesPercentage.map((serie, index) => {
            return (
              <Box key={index} sx={{ display: "flex", gap: "2px" }}>
                <CancelIcon sx={{ color: "#FC5339", cursor: "pointer" }} />
                <Typography sx={{ fontFamily: "GilroyRegular" }}>
                  {`${serie.value}% ${labels[index]}`}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ margin: "1em 0" }}>
          <HSBar
            height={"3em"}
            showTextIn
            fontColor="#ffffff"
            data={seriesPercentage}
            outlineWidth={0.01}
            outlineColor="white"
          />
        </Box>
      </Box>
      <Box
        sx={{
          border: "1.3px solid #E2E2E2",
          borderRadius: "10px",
          padding: "1em",
          margin: "1em 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1em",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Typography>
            <Typography component={"span"} sx={{ fontWeight: "bold" }}>
              {information[0] && information[0].name}:
            </Typography>{" "}
            {information[0] && information[0].value}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontFamily: "GilroyRegular", fontSize: "25px" }}>
          We can get highest returns on your savings!
        </Typography>
        <Button
          variant="outlined"
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "20px",
            borderColor: "#E2E2E2",
            borderRadius: "100px",
            color: "#FC5339",
            textTransform: "capitalize",
            "&:hover": {
              borderColor: "#d3d3d3",
            },
          }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Recommended Savings Plan
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default Description;
