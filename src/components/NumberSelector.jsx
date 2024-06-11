import { Box } from "@mui/material";

export default function NumberSelector({ selected, setSelected }) {
  const ArryNo = [1, 2, 3, 4, 5, 6];

  const handleNumberClick = (value) => {
    setSelected(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "end",
      }}
    >
      {ArryNo.map((value) => (
        <Box
          key={value}
          mr={1}
          ml={1}
          sx={{
            border: "1px solid black",
            height: "76px",
            width: "76px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            borderRadius: "5px",
            color: selected === value ? "white" : "black",
            backgroundColor: selected === value ? "black" : "white",
            fontWeight: "bold",
            ":hover": {
              transform: "scale(1.08)",
              backgroundColor: selected === value ? "black" : "#1E90FF",
              color: "white",
              transition: "0.2s background ease-in",
            },
          }}
          onClick={() => handleNumberClick(value)}
        >
          {value}
        </Box>
      ))}
    </Box>
  );
}
