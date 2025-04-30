function Footer() {
    return(
        <div className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-around">
                <div>
                    <h3 className="font-bold mb-4">About Us</h3>
                    <p className="text-sm max-w-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices risus eget nunc ullamcorper, ut consectetur eros mattis. Convallis fringilla arcu consequat condimentum lectus.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul className="text-sm space-y-1">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Themes</h3>
                    <ul className="text-sm space-y-1">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Info</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Support</h3>
                    <ul className="text-sm space-y-1">
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;