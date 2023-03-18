import React from "react";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const NoJobData = (props) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <CardContent>
      <Card variant="outlined">
        <Typography variant="h5">No Jobs In Database</Typography>
        <Typography variant="body2">
          Try refreshing page, checking console, or ensuring data is in the
          database
        </Typography>
        <Button size="small" onClick={handleClick}>
          Refresh Page
        </Button>
      </Card>
    </CardContent>
  );
};

export default NoJobData;
