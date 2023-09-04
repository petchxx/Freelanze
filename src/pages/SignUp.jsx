import React from 'react'
import { Link } from 'react-router-dom'


function SignUpPage() {
    return (
        <>
            <div className="bg-slate-100 min-h-screen flex justify-center items-center">

                <div className="bg-white shadow rounded p-12">
                    <div className="flex items-center gap-2 h-full justify-between w-[50%] sm:w-fit">
                        <Link
                            to="/"
                            className="text-4xl font-black tracking-tighter select-none"
                        >
                            <span className="text-black">Freelanz</span>
                            <span className="text-primary">è</span>
                        </Link>
                    </div>
                    <p className='mt-4 font-bold'>Welcome back!</p>
                    <p className=''>Enter your email address and password</p>

                    <div className="mt-4">
                        <p>Email</p>
                        <input type="text" placeholder="Enter your email" className="border-2 border-gray-300 w-full py-2 px-4 rounded-md" />
                    </div>
                    <div className="mt-4">
                        <p>Password</p>
                        <input type="password" placeholder="Enter your password" className="border-2 border-gray-300 w-full py-2 px-4 rounded-md" />
                    </div>
                    <div className="mt-4">
                        <p>Confirm Password</p>
                        <input type="password" placeholder="Enter your password" className="border-2 border-gray-300 w-full py-2 px-4 rounded-md" />
                    </div>

                    <div className="mt-10 flex flex-col items-center">
                        <button className="bg-primary text-white font-bold py-2 px-4 rounded-md w-full">Sign up</button>
                        <p className='mt-2'>Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUpPage