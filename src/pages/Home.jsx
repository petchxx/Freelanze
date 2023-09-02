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
            <div className="h-screen flex justify-center items-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Welcome to Freelanzè</h1>
                    <p className="text-l mt-5">Millions of talented people. Millions of amazing services.</p>
                    {/* search */}
                    <div className="mt-5">
                        <input type="text" placeholder="Search for services" className="border-2 border-gray-300 w-96 py-2 px-4 rounded-full"
                            onChange={(e) => { setSearch(e.target.value) }}
                            value={search}
                        />
                    </div>
                    <div className="mt-5">
                        <button className="bg-primary text-white font-bold py-2 px-4 rounded-full" onClick={() => { navigate("/search/" + search) }}>Search</button>
                    </div>
                </div>
            </div>
            <Marketplace />
            <Footer />
        </>
    )
}

export default Home