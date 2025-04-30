function Pricing(){
    return(
        <>
            <div className="bg-cover min-h-screen px-4 py-12 sm:py-20" style={{backgroundImage: 'url(../../assets/Images/background3.jpg)'}}> 
                <div className="flex flex-col justify-center items-center text-gray-800 py-16">
                        <h1 className="mb-4">OUR PRICING</h1>
                        <p className="font-bold md:text-xl max-w-2xl mb-10 px-6 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="justify-center flex items-center space-x-3 flex-col flex-wrap flex-1/2 md:flex-row space-y-4 md:space-y-0">
                                <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-xs h-80 px-6 py-6">
                                <div className="text-gray-700 font-bold py-3.5 px-3.5 mb-2 text-5xl md:text-6xl">
                                    <h1>$39</h1>
                                </div>
                                <div className="text-gray-700 flex justify-around flex-col px-6">
                                    <h1 className="font-bold text-xl mb-2">Branding</h1>
                                    <p className="max-w-3xl min-w-2xs text-xs mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laborum? Suscipit, asperiores.</p>
                                    <button className="bg-purple-500 rounded-full w-40 p-2.5 text-sm font-bold text-white">Buy Now</button>
                                </div>
                            </div>
                            <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-xs h-80 px-6 py-6">
                                <div className="text-gray-700 font-bold py-3.5 px-3.5 mb-2 text-5xl md:text-6xl">
                                    <h1>$59</h1>
                                </div>
                                <div className="text-gray-700 flex justify-around flex-col px-6">
                                    <h1 className="font-bold text-xl mb-2">Photography</h1>
                                    <p className="max-w-3xl min-w-2xs text-xs mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laborum? Suscipit, asperiores.</p>
                                    <button className="bg-purple-500 rounded-full w-40 p-2.5 text-sm font-bold text-white">Buy Now</button>
                                </div>
                            </div>
                            <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-xs h-80 px-6 py-6 mt-2">
                                <div className="text-gray-700 font-bold py-3.5 px-3.5 mb-2 text-5xl md:text-6xl">
                                    <h1>$89</h1>
                                </div>
                                <div className="text-gray-700 flex justify-around flex-col px-6">
                                    <h1 className="font-bold text-xl mb-2">Design</h1>
                                    <p className="max-w-3xl min-w-2xs text-xs mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laborum? Suscipit, asperiores.</p>
                                    <button className="bg-purple-500 rounded-full w-40 p-2.5 text-sm font-bold text-white">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Pricing;