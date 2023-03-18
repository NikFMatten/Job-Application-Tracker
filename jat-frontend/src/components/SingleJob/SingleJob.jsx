import React, { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";

const SingleJob = (props) => {
  const { job } = props;
  const date = job.date_applied.slice(0, 10);
  const time = job.date_applied.slice(11, 16);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.job_title}
        </Typography>
        <Typography variant="h5">{job.company_name}</Typography>
        <Typography variant="body2">
          Applied on <br /> {date} at {time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          More info
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {job.company_name}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {job.job_title}
            </Typography>
            <Typography
              id="modal-modal-subtitle"
              variant="caption"
              component="h2"
            >
              Applied on {date} at {time}
            </Typography>
            <Typography id="modal-modal-subtitle" variant="subtitle1">
              Pay Range: {job.salary_range}
              <br />
              Office Policy: {job.office_policy}
              <br />
              Job Location: {job.job_location}
              <br />
            </Typography>

            <Link href={job.job_listing_url}>Job Listing URL</Link>
          </Box>
        </Modal>
      </CardActions>
    </>
  );

  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default SingleJob;
