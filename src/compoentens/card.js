import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function MyCard(props) {
    
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const is_fav = props.favors.includes(props.index)

  return (
    <Card className={classes.root} variant="outlined" onClick= {()=>{ props.addFav(props.index)}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {props.program}
         {props.phase}
         {props.agency }
         {props.branch}
         {props.occurrence_number}
         {props.close_date}
         {props.open_date}
         
        </Typography> 

        { is_fav? <FavoriteIcon/>: <FavoriteBorderOutlinedIcon/> }
       {/* <FavoriteIcon/>
       <FavoriteBorderOutlinedIcon/> */}
      </CardContent>
      <CardActions>
        <Button size="small">{props.release_date}</Button>
      </CardActions>
    </Card>
  );
}