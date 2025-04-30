import { RectangleEllipsis } from "lucide-react";

function Feed(){
    return(
        <>
            <div className="bg-cover min-h-80 flex items-center px-4 py-12 sm:py-20" style={{ backgroundImage: 'url(../../assets/Images/background7.jpg)' }}>
                <div className="w-full flex justify-around flex-col sm:flex-row items-center">
                    <h1 className="text-gray-900 font-bold mt-5 mb-2">Join my feed</h1>
                    <div className="w-full sm:max-w-4xl max-w-fit bg-white/60 border-2 border-white rounded-3xl px-6 py-4 mx-10 flex items-center justify-between flex-col sm:flex-row space-y-2 space-x-2 sm:space-y-0">
                        <div className="relative w-full">
                            <input type="email" name="email" placeholder="Enter your email" id="email-input" className="w-full max-w-xl md:max-w-3xl h-10 px-4 bg-white shadow"/>
                            <RectangleEllipsis className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-red-500 rounded-full p-1" />
                        </div>
                        <button className="text-white bg-purple-500 h-10 px-4 relative font-bold text-sm w-full sm:w-auto"> Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feed;