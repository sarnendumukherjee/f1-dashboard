import React from "react";
import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import RaceDetails from "../../components/race-details/RaceDetails";
import Loader from "../../components/loader/Loader";
import { useGetSeasonDetails } from "../../service/Services.hook";

const SeasonDetails = () => {
  const { year, winner } = useParams<{ year: string; winner: string }>();
  const { data, loading, error } = useGetSeasonDetails(year);
  const races = data?.MRData?.RaceTable?.Races || [];

  return (
    <Paper elevation={0}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box padding="1rem">
            <Typography variant="h4" align="center" id="title">
              {`${year} Season Details`}
            </Typography>
          </Box>
          <Divider />
          <Box>
            {loading && <Loader />}
            {error && (
              <Alert severity="error">
                Something Went Wrong! Try again later!
              </Alert>
            )}
            {races.map((race, index) => {
              return (
                <RaceDetails
                  key={index}
                  race={race}
                  highlight={winner === race.Results[0].Driver.code}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SeasonDetails;
