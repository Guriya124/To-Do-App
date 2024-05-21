// TO-Do list
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { todoDelete, todoUpdate, } from '../app/todo/todoSlice'
import ListCard from "./Listcard"



export default function ToDoList() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [currentTodo, setCurrentTodo] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.todo)
    const currentUser = useSelector(state => state.user.currentUser)
    let matchingTodos = []
    if (currentUser) {
        matchingTodos = todo.filter(item => item && item.userId === currentUser.userName);
    }

    function handleDelete(id) {
        dispatch(todoDelete(id))
    }

    function handleUpdate(id) {

        const todo = matchingTodos.find((todo) => todo.id === id);
        if (todo) {
            setCurrentTodo(todo);
            setDialogOpen(true);
        } else {
            console.error(`No todo found with id ${id}`);
        }



    }

    function handleReadMore(id) {
        navigate(`/tododetail/${id}`);
    }
    return (
        <>
            <div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    {matchingTodos.map((item, index) => {
                        let shortDescription = item.description.length > 70
                            ? item.description.substring(0, 70) + "..."
                            : item.description;

                        return (
                            <ListCard
                                key={index}
                                title={item.title}
                                description={shortDescription}
                                onReadMore={() => handleReadMore(item.id)}
                                onUpdate={() => handleUpdate(item.id)}
                                onDelete={() => handleDelete(item.id)}
                            />
                        )
                    })}
                </div>
            </div>

            <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
                {/* <DialogTitle>Edit To-Do</DialogTitle> */}
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={currentTodo.title}
                        onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })}
                    />
                    <textarea
                        name="text" id="text"
                        cols="10" rows='5'
                        value={currentTodo.description}
                        onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
                        placeholder="Description...."
                        className='border-2 w-full' />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { dispatch(todoUpdate(currentTodo)); setDialogOpen(false); }} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}