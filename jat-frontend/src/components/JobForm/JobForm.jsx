import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const JobForm = (props) => {
  const { addJobListing } = props;
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobListingUrl, setJobListingUrl] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [officePolicy, setOfficePolicy] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobToAdd = {
      company_name: companyName,
      job_title: jobTitle,
      job_description: jobDescription,
      job_listing_url: jobListingUrl,
      salary_range: salaryRange,
      office_policy: officePolicy,
      job_location: jobLocation,
      date_applied: dateApplied,
    };
    addJobListing(jobToAdd);
    console.log(jobToAdd);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        <AddCircleOutlineIcon sx={{ mr: 1 }} />
        Add Job
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            All fields are required to enter a new job. Ensure the URL begins
            with 'http://' before submitting.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            label="Company Name"
            type="text"
            fullWidth
            variant="standard"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="jobTitle"
            label="Job Title"
            fullWidth
            variant="standard"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="jobDescription"
            label="Job Description"
            fullWidth
            variant="standard"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="jobListingUrl"
            label="Job Listing URL"
            type="url"
            fullWidth
            variant="standard"
            value={jobListingUrl}
            onChange={(e) => setJobListingUrl(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="salaryRange"
            label="Salary Range"
            fullWidth
            variant="standard"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="officePolicy"
            label="Office Policy"
            fullWidth
            variant="standard"
            value={officePolicy}
            onChange={(e) => setOfficePolicy(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="jobLocation"
            label="Job Location"
            fullWidth
            variant="standard"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="dateApplied"
            helperText="Date Applied"
            fullWidth
            type="datetime-local"
            variant="standard"
            value={dateApplied}
            onChange={(e) => setDateApplied(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobForm;
