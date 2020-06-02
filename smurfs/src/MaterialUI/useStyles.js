import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    grid: {
        flexGrow: 1,
        background: "#002981",
        padding: "30px",
    },
    card: {
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
    formRoot: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));