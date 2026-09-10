import { NavLink, Link } from "react-router";
import logo from "../assets/logo.jpg";
function Navbar() {

    return (
        <div>
            <div className="grid grid-cols-3 shadow-md">
                <img src={logo} alt="ArticleWeb" className="w-[3.5%] ml-1 mt-1 rounded-3xl absolute" />
                <h2 className=" bg-white-200 text-black font-bold text-xl p-4 ml-12 font-serif ">ArticleWeb</h2>

                <div className="flex justify-center gap-4 bg-white-200  text-gray-600 p-4 ">
                    <Link to="/" className="p-2">Home</Link>
                    <Link to="/about" className="p-2" >About</Link>
                    <Link to="/articles" className="p-2">Articles</Link>

                </div>
                <div className="flex justify-end pr-3">
                    <Link to="/add" className=" w-[25%] border-blue-800 bg-blue-700 rounded-xl text-sm p-2 mt-4 mb-4 right-0 text-white">Add Article +</Link>

                </div>
            </div>

        </div>
    );
}
export default Navbar;