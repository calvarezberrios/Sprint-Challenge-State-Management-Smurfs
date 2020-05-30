import React from 'react';
import useStyles from "./useStyles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function smurfCard({name, age, height}) {
    const classes = useStyles;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {age} Years Old
                </Typography>
                <Typography variant="body2" component="p">
                    {height} cm
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    );
}
