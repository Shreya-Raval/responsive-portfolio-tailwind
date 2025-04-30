import { AlignJustify } from 'lucide-react';
function Header()  {
    return(
        <>
        <nav> 
            <div className="bg-black opacity-75 px-6 py-4 flex justify-between w-full z-10 absolute">
                <h1 className="text-white font-bold text-2xl">Remotasks</h1>
                <div className="md:block hidden md:flex-row md:space-x-10 font-bold text-white items-center pt-1">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contacts</a>
                </div>
                <div className="md:block hidden bg-purple-500 rounded-full text-white text-sm md:text-xs font-bold px-4 py-2 text-center">
                    <button>Get Started</button>
                </div>
                <div className="md:hidden">
                    <AlignJustify className="text-white text-sm"/>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;