import { NavLink, Link } from "react-router";
function Navbar() {

    return (
        <div>
            <div className="grid grid-cols-2 shadow-md border-b">
                <h2 className=" bg-white-200 text-black font-bold text-xl p-4 ">ArticleWeb</h2>
                <div className="flex justify-end gap-4 bg-white-200  p-4 ">

                    <Link to="/" className="p-2">Home</Link>
                    <Link to="/about"className="p-2" >About</Link>
                    <Link to="/articles" className="p-2">Articles</Link>
                    <Link to="/add" className="border-blue-600 bg-blue-600 rounded-xl text-sm p-2 text-white">+Add Articles</Link>

                </div>
                
            </div>
           
        </div>
    );
}
export default Navbar;