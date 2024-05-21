import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signupStart, signupSuceess, signupFailure } from '../app/user/userSlice';

export default function SignUpForm() {
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
   
    const users = useSelector(state => state.user) || [];
    console.log(users.allUser)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(signupStart())
            const userExists = users.allUser.some(user => user.userName === userName);
            if (userExists) {
                dispatch(signupFailure('User already exists'))
            } else {
                dispatch(signupSuceess({ name, userName, password }))
               
            }
        } catch (error) {
            console.log(error)
            dispatch(signupFailure(error.message))
        }
    }


    return (
        <section className="signup dark:bg-gray-900 flex flex-col items-center justify-center h-[500px] lg:py-0">
            <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign Up
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={name} onChange={(e) => { setName(e.target.value) }} fullWidth />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="User Name" variant="outlined" name="userName" value={userName} onChange={(e) => { setUserName(e.target.value) }} fullWidth />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className='w-full flex items-center justify-center'>
                            <Button type="submit" variant="outlined">Sign Up</Button>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    )
}