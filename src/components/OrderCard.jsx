import React from 'react'
import services from '../data/services.json'
import freelancers from '../data/freelancers.json'
import gravatar from 'gravatar';
import users from '../data/users.json'


function OrderCard({ order }) {
    const service = services.find((service) => service.Service_ID == order.Service_ID);
    const freelancer = freelancers.find((freelancer) => freelancer.User_ID == order.Freelancer_ID);
    const freelancer_user = users.find((user) => user.User_ID == freelancer.User_ID);

    return (

        <div className='bg-white mt-4  rounded-lg'>
            <div className='flex justify-between w-full h-full '>
                <div className="flex">

                    <img src={service.ImgUrl ?? 'https://picsum.photos/seed/' + Math.random(22) + '/400/300'} alt="" className='w-30 h-40 rounded-lg' />
                    {/* Freelance Detail */}
                    <div className="flex flex-col justify-center ml-3">
                        <div className="flex items-center gap-x-2">
                            <img className='rounded-full w-8 h-8' src={gravatar.url(freelancer_user.Email)} alt="" />
                            <div className="flex justify-center flex-col">
                                <h1 className='text-sm font-bold text-b'>{freelancer_user.Display_Name}</h1>
                                <h1 className='text-xs font-base text-b'>{freelancer.Contacts}</h1>

                            </div>
                        </div>

                        <h1 className='text-xl font-bold text-black mt-2'>{service.Title}</h1>
                        <h1 className='text-l font-base '>{order.Request_Details}</h1>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default OrderCard