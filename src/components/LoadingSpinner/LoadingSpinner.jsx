import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingSpinner({
  height = "100vh",
  width = "100%",
  size = 50,
  progressbarProps = {},
}) {
  return (
    <Box
      sx={{
        display: "flex",
        height,
        width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={size} {...progressbarProps} />
    </Box>
  );
}
