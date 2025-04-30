function MainSection(){
    return(
       <div className="relative bg-center bg-no-repeat bg-cover overflow-hidden min-h-screen items-center justify-center flex px-4 sm:px-6 md:px-12" style={{backgroundImage:"url(../../assets/Images/background1.jpg)"}}>
        <div className="absolute inset-0 bg-black opacity-70"> </div>
            <div className="relative z-10 text-white px-6">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-3">Remotasks</h1>
                <p className="max-w-2xl mb-3 text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae natus, omnis nemo harum suscipit unde nam beatae expedita veritatis pariatur ex laborum impedit.</p>
                <button className="bg-purple-500 rounded-full w-fit size-10 sm:w-40 p-2.5 text-sm font-bold">Get Started</button>
            </div>
        </div>

    )
}

export default MainSection;