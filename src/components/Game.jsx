import { Box, Typography } from "@mui/material";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
export default function Game() {
  const [currentDice, setCurrentDice] = useState(1);
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0); // Initialize score with 0
  const [error, setError] = useState(" ");

  // Function to handle rolling the dice
  const rollDice = () => {
    if (!selected) {
      const result = "Select a number before rolling the dice";
      setError(result);
      return; // Stop execution if no number is selected
    }
    setError(" ");

    const value = generate_RandomNumber(1, 6); // Generate a random number
    setCurrentDice(value); // Update the current dice value

    // Update the score based on the selected number
    if (value === selected) {
      setScore((prev) => prev + value);
    } else {
      setScore((prev) => prev - 1);
    }
  };

  // Function to generate a random number within a range
  const generate_RandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <Box sx={{ display: "flex" }}>
        <TotalScore score={score} />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginTop: "20px",
            marginRight: "20px",
          }}
        >
          <Typography
            sx={{ color: "red", fontSize: "24px", fontWeight: "bold" }}
          >
            {error}
          </Typography>
          <NumberSelector selected={selected} setSelected={setSelected} />
          <Typography
            variant="h1"
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#000",
              marginTop: "10px",
            }}
          >
            Select a number
          </Typography>
        </Box>
      </Box>
      <RollDice
        resetScore={resetScore}
        currentDice={currentDice}
        rollDice={rollDice}
      />
    </div>
  );
}
