import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';
import Task from './Task'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        padding: 16
    }
});

function TaskList() {
    const classes = useStyles();
    const { tasks } = useContext(TaskListContext)
    return (
        <Container className={classes.container} maxWidth="md">
            {tasks.length ? (
                <List className="list">
                {tasks.map(task => {
                    return <Task task={task} key={task.id} />;
                })}
                </List>
            ) : (
                <Typography variant="h6" color="error">No Tasks</Typography>
            )}
        </Container>
    )
}

export default TaskList
