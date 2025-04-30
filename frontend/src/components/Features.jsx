import {Lightbulb, CircleUserRound, Palette } from "lucide-react";

function Features(){
    return(
        <>
            <div className="bg-center bg-cover min-h-screen px-4 py-12 sm:py-20" style={{backgroundImage: 'url(../../assets/Images/background2.jpg)'}}> 
                <div className="flex flex-col justify-center items-center text-white py-16">
                    <h1 className="mb-4">Features</h1>
                    <p className="font-bold text-sm md:text-xl text-center text-balance max-w-2xl mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dicta hic dignissimos tenetur magni mollitia blanditiis</p>
                    <div className="justify-center flex items-center space-x-3 space-y-5 flex-col flex-wrap flex-1/2 md:flex-row md:space-y-0 md:space-x-3">

                        <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-xs h-80 py-6 px-30">
                            <div className="w-16 h-16 rounded-full bg-white opacity-80 py-3.5 px-3.5 mb-6">
                                <Lightbulb className="text-purple-500 size-9" />
                            </div>
                            <div className="text-gray-700 flex justify-around flex-col items-center">
                                <h1 className="font-bold text-xl mb-2">Branding</h1>
                                <p className="max-w-3xl min-w-2xs text-xs pl-6 text-center mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laborum? Suscipit, asperiores.</p>
                                <button className="bg-purple-500 rounded-full w-40 p-2.5 text-sm font-bold text-white">Get Started</button>
                            </div>
                        </div>
                        <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-xs h-80 py-6 px-30">
                            <div className="w-16 h-16 rounded-full bg-white opacity-80 py-3.5 px-3.5 mb-6">
                                <CircleUserRound className="text-purple-500 size-9" />
                            </div>
                            <div className="text-gray-700 flex justify-around flex-col items-center">
                                <h1 className="font-bold text-xl mb-2">Photography</h1>
                                <p className="max-w-3xl min-w-2xs text-xs pl-6 text-center mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laborum? Suscipit, asperiores.</p>
                                <button className="bg-purple-500 rounded-full w-40 p-2.5 text-sm font-bold text-white">Get Started</button>
                            </div>
                        </div>
                        <div className="rounded-3xl border-2 border-white/100 bg-white/55 w-xs h-80 py-6 px-30 mt-2">
                            <div className="w-16 h-16 rounded-full bg-white opacity-80 py-3.5 px-3.5 mb-6">
                                <Palette className="text-purple-500 size-9 rotate-90" />
                            </div>
                            <div className="text-gray-700 flex justify-around flex-col items-center">
                                <h1 className="font-bold text-xl mb-2">Design</h1>
                                <p className="max-w-3xl min-w-2xs text-xs pl-6 text-center mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laborum? Suscipit, asperiores.</p>
                                <button className="bg-purple-500 rounded-full w-40 p-2.5 text-sm font-bold text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;