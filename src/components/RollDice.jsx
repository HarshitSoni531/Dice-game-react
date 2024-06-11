import { Box, Button, Typography } from "@mui/material";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

export default function RollDice({ resetScore, currentDice, rollDice }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "48px",
      }}
    >
      <Box>
        <img src={`./dice_${currentDice}.png`} alt="Dice" />
      </Box>
      <Button
        onClick={rollDice}
        sx={{
          px: 2,
          py: 1,
          mt: 2,
          width: "260px",
          boxShadow: "5px 5px 2px #000",
          borderRadius: 2,
          bgcolor: "white",
          color: "black",
          fontSize: "18px",
          border: "1px solid black",
          transition: "0.3s background ease-in",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "#1E90FF",
          },
        }}
      >
        <Typography>Click to roll the dice</Typography>
      </Button>
      <Button
        onClick={resetScore}
        sx={{
          px: 2,
          py: 1,
          mt: 2,
          width: "260px",
          boxShadow: "5px 5px 2px #000",
          borderRadius: 2,
          bgcolor: "black",
          color: "white",
          fontSize: "18px",
          border: "2px solid white",
          transition: "0.3s background ease-in",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "#1E90FF",
            border: "2px solid black",
          },
        }}
      >
        <Typography>Reset score</Typography>
      </Button>
      <Link to="/">
        <Button
          onClick={resetScore}
          sx={{
            px: 2,
            py: 1,
            mt: 2,
            width: "260px",
            boxShadow: "5px 5px 2px #000",
            borderRadius: 2,
            bgcolor: "black",
            color: "white",
            fontSize: "18px",
            border: "2px solid white",
            transition: "0.3s background ease-in",
            "&:hover": {
              cursor: "pointer",
              bgcolor: "#1E90FF",
              border: "2px solid black",
            },
          }}
          endIcon={<IoMdHome />}
        >
          <Typography>Home</Typography>
        </Button>
      </Link>
    </Box>
  );
}
