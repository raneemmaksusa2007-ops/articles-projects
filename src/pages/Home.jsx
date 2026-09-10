import { useState } from "react";
import { Link } from "react-router";

function Home() {
    const [count, setcount] = useState(0);

    return (
        <div>
            < div className=" flex flex-col items-center  min-h-[90vh] justify-center "  >
                <h2 className="  text-5xl font-bold  text-center   font-serif "> Welcome  to</h2> <br /><h2 className="text-6xl font-bold  text-blue-700  text-center  font-serif "> ArticleWeb</h2> 
                <h5 className="p-1 text-mist-700  ">A simple space to read, write, and explore, ideas-essays,thoughts,</h5>
                <h5 className="p-1 text-mist-700 ">and technical  writing all in one place</h5>
                
                <Link to="/articles">
                    <button className=" border-blue-800 bg-blue-700 rounded-lg text-l p-3 mt-3 font-bold text-white">Browse Articles </button>
                </Link>

            </div >
        </div>

    );
}
export default Home;