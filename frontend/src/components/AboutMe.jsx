function AboutMe(){
    return(
        <>
            <div className=" bg-cover bg-center min-h-screen px-4 py-12 sm:py-20" style={{backgroundImage: 'url(../../assets/Images/background6.jpg)'}}> 
                <section className="justify-center flex-col space-y-4 md:flex-row flex items-center py-55 space-x-7">
                    <img className="w-64 md:w-96 rounded-3xl sm:rounded-4xl shadow-2xl" src="../../assets/Images/mbr.jpeg" alt="photo" />
                    <div className="rounded-3xl border-2 border-white bg-blue-100 bg-blend-lighten max-w-xl py-6">
                        <h1 className="mt-10 mb-5 px-6 font-bold text-3xl md:text-5xl sm:text-4xl text-gray-700">About Me</h1>
                        <div className="flex justify-center md:flex-row flex-col px-6 text-gray-700">
                            <p className="text-wrap max-w-2xs text-sm pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum</p>
                            <p className="text-wrap max-w-2xs text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum</p>
                        </div>
                    </div>
                </section>
            </div>
            
        </>
    )
}

export default AboutMe;