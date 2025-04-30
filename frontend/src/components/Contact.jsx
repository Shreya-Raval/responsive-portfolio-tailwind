function Contact(){
    return(
        <>
            <div className="bg-cover min-h-80 bg-center px-4 py-12 sm:py-20" style={{backgroundImage: 'url(../../assets/Images/background6.jpg)'}}> 
                <div className="flex items-center justify-center py-26">
                    <div className="rounded-3xl border-2 border-white/100 bg-white/60 w-5xl h-60 px-6 py-4">
                        <div className="flex flex-col justify-center items-center text-gray-700 py-10">
                            <p className="mb-4">HAVE A NEW PROJECT IN MIND?</p>
                            <h1 className="text-5xl font-bold mb-5">Say Hello</h1>
                            <p>hello@yoursite.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;