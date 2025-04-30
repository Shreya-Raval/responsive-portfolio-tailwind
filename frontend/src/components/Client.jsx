function Client(){
    return(
        <>
            <div className="bg-cover min-h-80 px-4 py-12 sm:py-20" style={{backgroundImage: 'url(../../assets/Images/background4.jpg)'}}> 
                <div className="flex flex-col justify-center items-center text-gray-800 py-16">
                    <h1 className="mb-4">OUR CLIENTS</h1>
                    <p className="font-bold sm:text-xl text-sm max-w-2xl mb-10">We love to work with our clients</p>
                    <div className="justify-center flex items-center space-x-3 md:flex-row flex-col space-y-4">
                        <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-60 h-40 px-6 py-6">
                            <div className="text-gray-700 flex justify-around flex-col px-6">
                               <img src="../../assets/Images/1.png" alt="client_image_1" />
                            </div>
                        </div>
                        <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-60 h-40 px-6 py-6">
                            <div className="text-gray-700 flex justify-around flex-col px-6">
                               <img src="../../assets/Images/2.png" alt="client_image_2" />
                            </div>
                        </div>
                        <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-60 h-40 px-6 py-6">
                            <div className="text-gray-700 flex justify-around flex-col px-6">
                               <img src="../../assets/Images/3.png" alt="client_image_3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client;