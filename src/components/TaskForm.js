import React, { useContext, useState } from 'react'
import {TaskListContext} from '../contexts/TaskListContext';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    button: {
        marginTop: 16
    }, 
    form: {
        width: "100%"
    }
});

const TaskForm = () => {
    const { addTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('')
    const classes = useStyles();

    const handleChange = e => {
        setTitle(e.target.value)
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        addTask(title)
        setTitle("")
    };

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Grid container alignItems="center">
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid item md={12}>
                        <TextField 
                            onChange={handleChange}
                            value={title}
                            type="text" 
                            required
                            fullWidth 
                            label="Add task" 
                            variant="outlined"
                        />
                        <Button className={classes.button} variant="contained" color="secondary" type="submit">Add Task</Button>
                    </Grid>
                    <Grid item md={12}>
                    </Grid>
                </form>
            </Grid>
        </Container>
    )
}

export default TaskForm
