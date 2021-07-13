import React, {useContext, useState} from 'react'
import TaskListContextProvider, {TaskListContext} from '../contexts/TaskListContext';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    checked: {
        opacity: 0.5,
        textDecorationLine: 'line-through',
    },
    form: {
        width: "100%"
    }
});


const Task = ({ task }) => {
    const classes = useStyles();
    const {removeTask, updateTask, switchComplete} = useContext(TaskListContext);
    const [onEdit, setOnEdit] = useState(false)
    const [title, setTitle] = useState(task.title)

    const editTask = () => {
        setOnEdit(true)
    };

    const handleChange = e => {
        setTitle(e.target.value)
    };

    const cancelEdit = () => {
        setOnEdit(false)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        if ( !task.completed ) {
            updateTask(title, task.id)
            setOnEdit(false)
        } else {
            alert("Can't edit completed task!")
        }
    };

    if (onEdit) {
        return (
            <ListItem>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField
                        type="text"
                        value={title}
                        type="text" 
                        required
                        onChange={handleChange}
                        fullWidth 
                        label="Edit task" 
                        variant="outlined"
                    />
                    <Button type="submit">Save</Button>
                    <Button onClick={cancelEdit}>Cancel</Button>
                </form>
            </ListItem>
        )
    } else {
        return (
            <ListItem className="list-item">
                <Checkbox 
                    checked={task.completed} 
                    onChange={() => switchComplete(task.id)} 
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <ListItemText className={task.completed ? classes.checked : ''}>{task.title}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton onClick={editTask} edge="end" aria-label="edit" disabled={task.completed}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => removeTask(task.id)} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default Task;
