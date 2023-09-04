import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import order from '../data/order.json'
import OrderCard from '../components/OrderCard';

function UserPage() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const orders = order.filter((order) => {

        return order.Client_ID == user.User_ID;
    });


    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }
        , [user]);




    return (
        <>
            <Navbar />
            <div className="bg-slate-50 py-40 px-20">

                <section className="container flex-col items-center mx-auto ">
                    <div className="flex items-center justify-center w-full">
                        <p className='text-4xl font-bold mt-4'>Orders</p>
                    </div>

                    <div className="mt-8">
                        {
                            orders.length > 0 ? (
                                orders.map((order, i) => (
                                    <OrderCard order={order} key={i} />
                                ))
                            ) : (
                                <div className="flex items-center justify-center mt-24">
                                    <div className="text-3xl font-bold text-gray-400">No orders found</div>
                                </div>
                            )
                        }

                    </div>




                </section>
            </div>
        </>
    )
}

export default UserPage