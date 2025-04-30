function Skills(){
    return(
        <>
        <div className="bg-cover min-h-90" style={{backgroundImage: 'url(../../assets/Images/background6.jpg)'}}> 
            <section className="justify-center flex-col flex-wrap space-y-5 md:flex-row flex items-center py-25 space-x-7">
                    <img className="w-64 md:w-72 sm:w-80 rounded-4xl shadow-2xl" src="../../assets/Images/features1.jpg" alt="skills" />
                    <div className="rounded-3xl border-2 border-white bg-blue-100 bg-blend-lighten max-w-2xl md:w-xl h-96">
                        <div className="flex justify-around text-gray-700 flex-col items-center">
                            <h1 className="text-justify mt-16 mb-3 font-bold text-3xl text-gray-700">My Competence</h1>
                            <p className="text-justify text-xs max-w-2xs text-gray-400 pl-6 mb-6 px-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum</p>
                            <div className="w-full max-w-60 mb-4">
                                <div className="flex justify-between text-sm text-gray-400 mb-1">
                                    <span>Branding</span>
                                    <span>92%</span>
                                </div>
                            <div className="w-full bg-gray-300 rounded-full h-1.5">
                                <div className="bg-orange-500 h-1.5 rounded-full w-[92%]"></div>
                                </div>
                            </div>
                            <div className="w-full max-w-60 mb-4">
                                <div className="flex justify-between text-sm text-gray-400 mb-1">
                                    <span>Photography</span>
                                    <span>71%</span>
                                </div>
                            <div className="w-full bg-gray-300 rounded-full h-1.5">
                                <div className="bg-orange-500 h-1.5 rounded-full w-[71%]"></div>
                                </div>
                            </div>
                            <div className="w-full max-w-60 mb-4">
                                <div className="flex justify-between text-sm text-gray-400 mb-1">
                                    <span>Design</span>
                                    <span>53%</span>
                                </div>
                            <div className="w-full bg-gray-300 rounded-full h-1.5">
                                <div className="bg-orange-500 h-1.5 rounded-full w-[53%]"></div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Skills;