import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import JobForm from "../JobForm/JobForm";

const NavBar = (props) => {
  const { addJobListing } = props;

  // #0a1929

  return (
    <>
      <Box sx={{ mx: 5, mb: 3 }}>
        <Paper elevation={2} sx={{ backgroundColor: "#0f263e", pl: 5 }}>
          <JobForm
            apiCall={addJobListing}
            buttonText={"Add Job"}
            navBar={true}
            interviewColumn={false}
          />
        </Paper>
      </Box>
    </>
  );
};

export default NavBar;
