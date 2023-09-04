import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard';
import services from '../data/services.json'


function SearchPage() {
    const { query } = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = React.useState("");
    const [filteredServices, setFilteredServices] = React.useState([]);

    useEffect(() => {
        setSearch(query)
        const filtered = services.filter((service) => {
            return service.Title.toLowerCase().includes(query.toLowerCase()) || service.Service_Category.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredServices(filtered);
    }, [query]);

    return (
        <>
            <Navbar />

            <section className="container flex-col items-center mx-auto ">
                <div className="flex items-center justify-center w-full mt-40">

                    <div className='flex items-center gap-x-2'>
                        <input type="text"
                            placeholder="Search for services"
                            className="px-4 py-2 border-2 border-gray-300 rounded-full w-80"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <button className="px-4 py-2 font-bold text-white rounded-full bg-primary" onClick={() => { navigate("/search/" + search) }}>Search</button>

                    </div>
                </div>
                {filteredServices.length > 0 ? (
                    <div className='grid grid-cols-1 mt-6 gap-y-4 place-content-center justify-stretch place-items-center md:grid-cols-2 lg:grid-cols-3'>
                        {filteredServices.map((service, i) => (
                            <ServiceCard service={service} key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center mt-24">
                        <div className="text-3xl font-bold text-gray-400">No services found</div>
                    </div>
                )
                }


            </section>
        </>
    )
}

export default SearchPage