import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import gravatar from "gravatar";
import users from "../data/users.json";


const Navbar = () => {
    const [active, setActive] = useState(false);
    const [openDrop, setOpenDrop] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const { pathname } = useLocation();
    const [loginModal, setLoginModal] = useState(false);
    const modalRef = useRef(null);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();



    const marketsData = [
        {
            icon: "a",
            title: "Graphics & Design",
        },
        {
            icon: "a",
            title: "Digital Marketing",
        },
        {
            icon: "a",
            title: "Writing & Translation",
        },
        {
            icon: "a",
            title: "Video & Animation",
        },
        {
            icon: "a",
            title: "Music & Audio",
        },
        {
            icon: "a",
            title: "Programming & Tech",

        },
        {
            icon: "a",
            title: "Business",
        },
        {
            icon: "a",
            title: "Lifestyle",
        },
        {
            icon: "a",
            title: "AI Services",
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpenDrop(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const backgroundChange = () => {
            window.scrollY > 0 ? setActive(true) : setActive(false);
        };
        window.addEventListener("scroll", backgroundChange);
        return () => {
            window.removeEventListener("scroll", backgroundChange);
        };
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };




    const slideRight = () => {
        let slider = document.getElementById("navSlider");
        let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
        if (slider.scrollLeft < maxScrollLeft) {
            // check if not at the end
            slider.scrollLeft = slider.scrollLeft + 400;
        } else {
            // if at end, wrap to beginning
            slider.scrollLeft = 0;
        }
    };


    return (
        <header
            className={`flex items-center justify-center w-full flex-col text-white fixed top-0 transition-all ease-in-out z-20 ${active || pathname !== "/" ? "bg-white !text-darkColor" : ""
                }`}
        >
            <div className="contain">
                <div className="relative flex items-center justify-between w-full py-4">

                    <div className="flex items-center gap-2 h-full justify-between w-[50%] sm:w-fit">

                        <Link
                            to="/"
                            className="text-4xl font-black tracking-tighter select-none"
                        >
                            <span className="text-black">Freelanz</span>
                            <span className="text-primary">è</span>
                        </Link>
                    </div>
                    {user ? <>
                        <nav className="flex items-center justify-end text-base font-medium gap-7 text-black">

                            <div
                                onClick={() => {
                                    setOpenDrop(!openDrop);
                                }}
                                className="flex items-center gap-2 cursor-pointer "
                            >
                                <div className="w-10 h-10 bg-white rounded-full">
                                    <img className='w-full h-full rounded-full' src={gravatar.url(user.Email)} alt="" srcSet="" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold">{user.Display_Name}</p>
                                </div>

                            </div>
                            <div
                                ref={modalRef}
                                className={`absolute top-14 right-0 w-64 bg-white rounded-md shadow-lg p-4 transition-all duration-300 ${openDrop ? "opacity-100" : "opacity-0 pointer-events-none"
                                    } z-10`}
                            >
                                <div className="flex items-center gap-2py-2 px-2 cursor-pointer mt-2" onClick={() => {

                                }}>
                                    <div className="flex flex-col">
                                        <p className="font-semibold ">Freelancer</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 py-2 px-2 cursor-pointer mt-2" onClick={() => {
                                    handleLogout()
                                }}>
                                    <div className="flex flex-col">
                                        <p className="font-semibold " >Logout</p>
                                    </div>
                                </div>


                            </div>
                            {/* <div
                                className={`border border-primary py-2 px-5 rounded hover:bg-primary hover:border-primary hover:text-white text-primary transition-all duration-300 text-sm font-semibold ${active ? "text-primary border-primary" : ""
                                    }`}
                                onClick={() => {
                                    handleLogout()
                                }}
                            >
                                Logout
                            </div> */}

                        </nav>

                    </> :
                        <nav className="flex items-center justify-end text-base font-medium gap-7">



                            <div
                                onClick={() => {
                                    navigate("/login");
                                    setLoginModal(true);
                                }}
                                className="flex cursor-pointer  text-black hover:text-primary transition-all duration-300"
                            >
                                Login
                            </div>
                            <NavLink
                                to="/signup"
                                className={`border border-primary py-2 px-5 rounded hover:bg-primary hover:border-primary hover:text-white text-primary transition-all duration-300 text-sm font-semibold ${active ? "text-primary border-primary" : ""
                                    }`}
                            >
                                Sign up
                            </NavLink>
                        </nav>
                    }
                </div>
            </div>
            <div
                className={`w-full transition-all duration-300 border-b ${active || pathname !== "/" ? "flex" : "hidden"
                    }`}
            >
                <hr className="border-black" />
                <div className="relative contain">
                    <div
                        id={"navSlider"}
                        className={`w-full inline-block h-full whitespace-nowrap scroll-smooth lg:flex items-center lg:justify-between py-3 overflow-x-auto gap-5 font-medium scrollbar-hide text-sm relative ${active || pathname !== "/" ? "!text-gray-500" : "text-gray-200"
                            }`}
                    >
                        {marketsData.map((item, i) => (
                            <Link
                                to={"/services/" + item.title}
                                key={i}
                                className="hover:border-b-2 cursor-pointer transition-[border] h-8 scrollbar-hide border-primary mx-4 first:ml-0 lg:mx-0"
                            >
                                {item.title}

                            </Link>
                        ))}

                    </div>
                    <span
                        onClick={slideRight}
                        className="absolute z-10 cursor-pointer top-3 -right-8 laptop:hidden"
                    >
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
