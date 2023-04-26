import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import JobForm from "../JobForm/JobForm";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const NavBar = (props) => {
  const { addJobListing } = props;

  // #0a1929

  return (
    <>
      <Grid container spacing={1} sx={{ mx: 5, mb: 3, pl: 20 }}>
        <Grid item xs={1} sx={{ mt: -1.8, mr: -5 }}>
          <Link href="http://localhost:3000/" underline="hover">
            <Button variant="text">
              <HomeIcon sx={{ mr: 1 }} />
              <p>Home</p>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <JobForm
            apiCall={addJobListing}
            buttonText={"Add Job"}
            navBar={true}
            interviewColumn={false}
          />
        </Grid>
        <Grid item xs={1} sx={{ mt: -1.8 }}>
          <Link href="http://localhost:3000/archive" underline="hover">
            <Button variant="text">
              <InventoryIcon sx={{ mr: 1 }} />
              <p>Archive</p>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
