import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Box
        height={"100%"}
        width={"100%"}
        display="flex"
        justifyContent="center"
        alignItems="center" // Added for vertical centering
      >
        <Box padding={8} mt={8}>
          <img
            src="dices.png"
            alt="image not available"
            style={{ width: "450px", height: "300px" }}
          />
        </Box>
        <Box padding={2} ml={8} textAlign={"right"}>
          {" "}
          {/* Adjusted margin for spacing */}
          <Typography
            variant="h1"
            textAlign="center"
            padding={2}
            fontWeight={600}
            whiteSpace={"nowrap"}
            fontSize={"96px"}
          >
            DICE GAME
          </Typography>
          <Link to="/playgame" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
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
              Play
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
