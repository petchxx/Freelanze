import React from 'react'
import Navbar from '../components/Navbar'
import Marketplace from '../components/MarketPlace'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';



function Home() {
    const navigate = useNavigate();
    const [search, setSearch] = React.useState("");
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Welcome to Freelanzè</h1>
                    <p className="mt-5 text-l">Millions of talented people. Millions of amazing services.</p>
                    {/* search */}
                    <div className="mt-5">
                        <input type="text" placeholder="Search for services" className="px-4 py-2 border-2 border-gray-300 rounded-full w-96"
                            onChange={(e) => { setSearch(e.target.value) }}
                            value={search}
                        />
                    </div>
                    <div className="mt-5">
                        <button className="px-4 py-2 font-bold text-white rounded-full bg-primary" onClick={() => { navigate("/search/" + search) }}>Search</button>
                    </div>
                </div>
            </div>
            <Marketplace />
            <Footer />
        </>
    )
}

export default Home