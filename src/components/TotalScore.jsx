import { Box, Typography } from "@mui/material";

export default function TotalScore({ score }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={0}>
      <Box
        sx={{
          width: "200px",
          color: "black",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "100px", color: "#000" }}>
          {score}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", fontWeight: "bold", color: "#000" }}
        >
          Total Score
        </Typography>
      </Box>
    </Box>
  );
}
