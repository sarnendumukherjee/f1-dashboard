import React, { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import { Race } from "../../service/Service.model";

interface RaceDetailsProps {
  race: Race;
  highlight: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: "1rem auto",
      backgroundColor: theme.palette.secondary.light,
    },
    chip: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    cardContent: {
      backgroundColor: theme.palette.secondary.light,
    },
    cardAction: {
      flexDirection: "row-reverse",
    },
    highlightedCard: {
      backgroundColor: "#33c9dc",
    },
  })
);

const RaceDetails: FC<RaceDetailsProps> = ({ highlight, race }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={3}>
      <CardContent className={highlight ? classes.highlightedCard : ""}>
        <Typography gutterBottom variant="h5" component="h2" id="roundDetails">
          {`Round: ${race.round} - ${race.raceName}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Circuit : {race.Circuit.circuitName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Date: {race.date}
        </Typography>
        <Chip
          className={classes.chip}
          label={`Winner: ${race.Results[0].Driver.givenName}  ${race.Results[0].Driver.familyName}`}
        />
        <Chip
          className={classes.chip}
          label={`Constructor: ${race.Results[0].Constructor.name}`}
        />
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          href={race.url}
          target="_blank"
          endIcon={<LaunchIcon />}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default RaceDetails;
