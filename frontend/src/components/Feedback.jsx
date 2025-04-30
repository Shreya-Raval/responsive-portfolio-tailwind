import { Mail, MessageSquare, Users } from "lucide-react";

function Feedback(){
    return(
        <>
            <div className="bg-cover min-h-70 bg-center px-4 py-12 sm:py-20" style={{backgroundImage: 'url(../../assets/Images/background5.jpg)'}}> 
                <div className="flex items-center justify-center py-26">
                    <div className="rounded-3xl border-2 border-white/100 bg-white/60 w-2xl md:w-5xl md:h-70 px-6 py-6">
                        <div className="flex flex-col justify-center items-center text-gray-700 py-2 md:py-10">
                            <h1 className="text-xl md:text-4xl font-bold">Stay Connected</h1>
                            <h1 className="text-xl text-center md:text-4xl font-bold">We appreciate your feedback.</h1>
                        </div>
                        <div className="flex justify-around text-sm flex-col sm:flex-row m-auto">
                            <div className="mt-4">
                                <Users className="inline-block mr-2" />
                                <span className="inline-block">Support Forum</span>
                            </div>
                            <div className="mt-4">
                                <MessageSquare className="inline-block mr-2"/>
                                <span className="inline-block">Online Chat</span>
                            </div>
                            <div className="mt-4">
                                <Mail className="inline-block mr-2"/>
                                <span className="inline-block">Send Message</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback;