import { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

export default function SignUp() {
    const [haveAccount, setHaveAccount] = useState(false)

    function toggleHaveAccount() {
        setHaveAccount(!haveAccount)
    }
    return (
        <>
            <div className='signup h-screen '>
                {
                    haveAccount ? <SignInForm /> : <SignUpForm />
                }
                {
                    haveAccount ?
                        <div className='flex items-center justify-center text-black mt-5  '>
                            <p className='font-bold font-[montserrat]'>Don&apos;t Have Account ?</p>
                            <div onClick={toggleHaveAccount}
                                className='flex underline cursor-pointer font-[montserrat] ml-2'
                            >
                                Create One
                            </div>
                        </div> :
                        <div className='flex items-center justify-center text-black'>
                            <p className='font-bold  font-[montserrat]'>Already Have Account</p>
                            <div
                                onClick={toggleHaveAccount}
                                className='flex underline cursor-pointer font-[montserrat] ml-2'
                            >
                                SignIn
                            </div>
                        </div>
                }

            </div>

        </>
    )
}
