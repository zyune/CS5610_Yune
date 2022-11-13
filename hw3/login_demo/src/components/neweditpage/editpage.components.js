import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function EditPage() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <div>
        <div>
          <label>Name</label>
          <TextField fullWidth label="PageName" id="fullWidth" />
        </div>
        <div>
          <label>Title</label>
          <TextField fullWidth label="PageTitle" id="fullWidth" />
        </div>
        <div>
          <Button variant="contained">Delete</Button>
        </div>
      </div>
    </Box>
  );
}
