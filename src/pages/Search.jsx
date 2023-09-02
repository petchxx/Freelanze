import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

function SearchPage() {
    const { query } = useParams();
    return (
        <>
            <Navbar />
            <div className='mt-48'>Search = {query}</div>
        </>
    )
}

export default SearchPage