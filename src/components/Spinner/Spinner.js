import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePromiseTracker } from 'react-promise-tracker';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

function Spinner() {
    const classes = useStyles();
    const { promiseInProgress } = usePromiseTracker();

    return (
        <div className={classes.root}>
            {promiseInProgress &&
            <CircularProgress color="secondary" size="80px" />}
        </div>
    );
}

export default Spinner;