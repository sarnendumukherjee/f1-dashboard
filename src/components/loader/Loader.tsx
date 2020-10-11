import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <Box padding="1rem" textAlign="center">
      <CircularProgress />
    </Box>
  );
};

export default Loader;
