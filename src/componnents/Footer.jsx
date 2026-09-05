import logo from "../assets/logo.jpg";
function Footer() {

    return (
        <div className="border-t-2 mt-20 bg-gray-900 rounded-2xl p-5 ">
            <div className="grid grid-cols-4">
                <div className="flex flex-col  ml-4 relative">
                    <img src={logo} alt="ArticleWeb" className="w-[15%] ml-1 mt-1 rounded-3xl absolute" />
                    <h1 className=" font-bold ml-14 text-white mt-4  font-serif   ">ArticleWeb</h1>
                    <p className="ml-3 mt-6 text-gray-300 ">Discover interesting articles,
                        learn something new, and share your ideas.</p>
                </div>
                <div className="flex flex-col">
                    <h2 className=" text-white  mt-3 font-serif font-bold">Quick Links</h2>
                    <ul className="text-gray-300 ">
                        <li>Home</li>
                        <li>Articles</li>
                        <li> Favorites</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h2 className=" text-white  mt-3 font-serif font-bold">Categories</h2>
                    <ul className="text-gray-300 ">
                        <li>Technology</li>
                        <li>Programming</li>
                        <li>  Design</li>
                        <li>Lifestyle</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h2 className=" text-white  mt-3 font-serif font-bold">Newsletter</h2>
                    <p className=" text-gray-300">Stay updated with the lastest articles and ideas.</p>
                    <input type="email" placeholder="example@email.com" className="border border-gray-200 rounded mt-3 p-1 outline-0" />
                    <button className="border-blue-600 bg-blue-600 font-bold rounded-xl text-sm w-[50%] mt-3  p-2 text-white">Subscribe</button>
                </div>
            </div>
            <div className="grid grid-cols-4 pt-2 border-t border-t-gray-300 mt-6">
                <p className=" text-gray-300">     © 2026 ArticleWeb All rights reserved.</p>
                <p></p>
                <p className=" text-gray-300">Privacy Policy </p>
                <p className=" text-gray-300"> Terms of Service</p>
            </div>
        </div>
    )
}
export default Footer;