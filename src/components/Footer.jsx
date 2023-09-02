import React from 'react'

function Footer() {
    return (
        <footer className="w-full lg:py-14 lg:pb-5 pb-3">
            <div className="contain">
                <div className="w-full flex flex-col items-start justify-start gap-10">
                    <div className="w-full flex items-center justify-between border-t pt-5 flex-col gap-2 sm:flex-row sm:gap-0">
                        <div className="flex items-center justify-start gap-4 flex-col md:flex-row">
                            <div className="flex items-end justify-end select-none">
                                <h2 className="text-3xl select-none font-black tracking-tighter text-gray-500">
                                    Freelanzè
                                </h2>
                            </div>
                            <p className="text-sm font-medium text-gray-400">
                                © 2023
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer