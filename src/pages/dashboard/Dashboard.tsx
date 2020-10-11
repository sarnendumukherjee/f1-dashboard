import React from "react";
import { Box, Divider, Grid, List, Paper, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import SeasonListItem from "../../components/season-list-item/SeasonListItem";
import Loader from "../../components/loader/Loader";
import { useGetSeasons } from "../../service/Services.hook";

const Dashboard = () => {
  const { data, loading, error } = useGetSeasons();
  const seasons = data?.MRData?.StandingsTable?.StandingsLists || [];

  return (
    <Paper elevation={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box padding="1rem">
            <Typography variant="h5" align="center" id="title">
              F1 World Champions (2005 - 2015)
            </Typography>
          </Box>
          <Divider />
          <div>
            <List dense>
              {loading && <Loader />}
              {error && (
                <Alert severity="error">
                  Something Went Wrong! Try again later!
                </Alert>
              )}
              {seasons.map((season, index) => (
                <div key={index}>
                  <SeasonListItem season={season} />
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;
