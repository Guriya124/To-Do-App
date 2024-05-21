import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signinSuceess, signinFailure } from '../app/user/userSlice';
import { useNavigate } from 'react-router-dom';
export default function SignInForm() {
  const users = useSelector(state => state.user) || [];
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(signinStart())
      const user = users.allUser.find(user => user.userName === userName && user.password === password);
      if (user) {
        dispatch(signinSuceess(user))
        navigate('/home')
      } else {
        dispatch(signinFailure('Invalid username or password'))
        console.log('Invalid username or password')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="signup dark:bg-gray-900 flex flex-col items-center justify-center mx-auto h-[500px]  lg:py-0">

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign In
          </h1>
          <form className="space-y-3 md:space-y-5" onSubmit={handleSubmit} >
            <div>
              <TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth name='username' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div>
              <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className='w-full flex items-center justify-center'>

              <Button type="submit" variant="outlined">Sign In</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
