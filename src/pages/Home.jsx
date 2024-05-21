import React from 'react'
import ToDoList from '../components/ToDoList'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { todoFailure, todoStart, todoSuceess } from '../app/todo/todoSlice';

export default function Home() {

    const currentuser = useSelector(state => state.user.currentUser) || [];
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const userId = currentuser.userName
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault();
        try {
            dispatch(todoStart())
            dispatch(todoSuceess({ title, description, userId }))
            handleClose()
            setTitle("")
            setDescription("")
        } catch (error) {
            console.log(error)
            dispatch(todoFailure(error.message))
        }
    }


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ToDoList />


            <div className='absolute bottom-10 right-10'>
                <button
                    onClick={handleClickOpen}
                    className='text-xl text-center rounded-lg bg-green-400 p-4'>
                    Add +
                </button>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                }}
            >
                <DialogTitle>Add Items</DialogTitle>
                <DialogContent sx={{ minWidth: 400, maxWidth: 400 }}>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="title"
                        label="Enter Title"
                        type="text"
                        value={title}
                        fullWidth
                        onChange={(e) => setTitle(e.target.value)}
                        variant="standard"
                    />

                    <textarea
                        name="text" id="text"
                        cols="10" rows='5'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description...."
                        className='border-2 w-full' />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}
