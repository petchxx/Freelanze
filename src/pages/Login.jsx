import React from 'react'
import Navbar from '../components/Navbar'
import Marketplace from '../components/MarketPlace'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import users from '../data/users.json'

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const serviceId = localStorage.getItem("serviceId");

    const handleLogin = () => {
        // console.log(email, password)
        const user = users.find((user) => {
            return user.Email === email && user.Password === password;
        });
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            if (serviceId) {

                navigate(`/service/${serviceId}`);
                localStorage.removeItem("serviceId");

            } else {
                navigate("/user");
            }
        } else {
            alert("Invalid email or password");
        }
    }
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
                        <input type="text" placeholder="Enter your email" className="border-2 border-gray-300 w-full py-2 px-4 rounded-md"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}

                        />
                    </div>
                    <div className="mt-4">
                        <p>Password</p>
                        <input type="password" placeholder="Enter your password" className="border-2 border-gray-300 w-full py-2 px-4 rounded-md"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>



                    <div className="mt-10 flex flex-col items-center">
                        <button className="bg-primary text-white font-bold py-2 px-4 rounded-md w-full"
                            onClick={() => {
                                handleLogin()
                            }}

                        >Login</button>
                        <p className='mt-2'>Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginPage