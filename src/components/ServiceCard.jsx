import React from 'react';
import { useNavigate } from 'react-router-dom';

function ServiceCard({ service }) {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    return (
        <div className='bg-card rounded-xl  transform hover:-translate-y-[5px] hover:scale-[1.03] transition-transform duration-300 cursor-pointer shadow-lg ' onClick={
            () => {
                if (user) {
                    navigate(`/service/${service.Service_ID}`);
                } else {
                    localStorage.setItem("serviceId", service.Service_ID);
                    navigate("/login");
                }
            }
        }>
            <img className='h-40 w-[420px] md:w-80 rounded-xl ' src={service.ImgUrl ?? 'https://picsum.photos/seed/' + Math.random(22) + '/400/300'} alt='' />
            <div className='p-4'>
                <div className='text-xl font-bold text-black'>{service.Title}</div>
                <div className='flex items-center justify-between mt-1'>
                    <div className='flex items-center'>
                        <div className='mr-2 font-bold text-black text-l'>฿ {(service.Price)}</div>
                    </div>



                </div>
            </div>
        </div >
    );
}

export default ServiceCard;
