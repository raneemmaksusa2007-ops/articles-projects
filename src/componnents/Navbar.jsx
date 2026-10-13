import { NavLink, Link } from "react-router";
import logo from "../assets/logo.jpg";
import { useAuth } from "../content/AuthContext";
import axios from "axios";


function Navbar() {

    const { user , token,logout } = useAuth();
    const handleLogout = async () => {
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/logout",
                {},
                {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }
                
            )
        }catch(err){
               console.log(err)     
        }
        logout();
    }

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

                
                {user ? (
                <div className="flex gap-3 items-center">
                    <p>{user.name}</p>
                    <button onClick={handleLogout} className="  border-red-800 bg-red-700 rounded-xl text-sm p-2 mt-4 mb-4  text-white"> log out</button>
                </div>

                ) :(
                <div className="flex justify-end gap-2">
                    <Link to="/register" className="  border-blue-800 bg-blue-700 rounded-xl text-sm p-2 mt-4 mb-4  text-white">Register</Link>
                    <Link to="/login" className="  border-blue-800 bg-blue-700 rounded-xl text-sm p-2 mt-4 mb-4  text-white">log in</Link>
                </div>
                )}
            </div>

        </div>
    );
}
export default Navbar;