import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  createStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Season } from "../../service/Service.model";

interface SeasonListItemProps {
  season: Season;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    seasonLink: {
      textDecoration: "none",
      color: "inherit",
    },
  })
);

const SeasonListItem: FC<SeasonListItemProps> = ({ season }) => {
  const classes = useStyles();
  const { givenName, familyName, code } = season.DriverStandings[0].Driver;
  const fullName = `${givenName} ${familyName}`;
  return (
    <Link to={`/${season.season}/${code}`} className={classes.seasonLink}>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DoubleArrowIcon color="secondary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="h6">Season : {season.season}</Typography>
          }
          secondary={`Champion : ${fullName}`}
        />
      </ListItem>
    </Link>
  );
};

export default SeasonListItem;
