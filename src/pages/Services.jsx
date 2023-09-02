import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

function ServicesPage() {
    const { category } = useParams();
    return (
        <>
            <Navbar />
            <div className='mt-40'>{category}</div>
        </>
    )
}

export default ServicesPage