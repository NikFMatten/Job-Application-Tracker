import React, { useState } from "react";
import ArchivedJobs from "../components/ArchivedJobs/ArchviedJobs";
import Box from "@mui/material/Box";

const ArchivePage = (props) => {
  const {
    archivedJobs,
    deleteArchivedJob,
    addInterviewingJob,
    addRejectedJob,
  } = props;

  return (
    <>
      <Box sx={{ ml: 25 }}>
        <ArchivedJobs
          archivedJobs={archivedJobs}
          deleteArchivedJob={deleteArchivedJob}
          addInterviewingJob={addInterviewingJob}
          addRejectedJob={addRejectedJob}
        />
      </Box>
    </>
  );
};

export default ArchivePage;
