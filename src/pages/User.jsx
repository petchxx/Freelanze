import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function UserPage() {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }
        , [user]);
    return (
        <>
            <Navbar />
            <section className="container flex-col items-center mx-auto ">
                <div className="flex items-center justify-center w-full mt-40">
                    <p className='text-4xl font-bold'>Orders</p>
                </div>



            </section>
        </>
    )
}

export default UserPage