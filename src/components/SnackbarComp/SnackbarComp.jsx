import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import { Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar({
  message = "",
  statusCode = "",
  type = "success",
  vertical = "bottom",
  horizontal = "right",
}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        className="flex items-center"
      >
        <Alert severity={type} onClose={handleClose} sx={{ paddingInline: 2 }}>
          <span> {message}</span>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
