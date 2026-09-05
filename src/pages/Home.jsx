import { useState } from "react";

function Home() {
    const [count, setcount] = useState(0);

    return (
        <div>
            < div className=" flex flex-col items-center mt-9 "  >
                <h2 className="  text-5xl font-bold    mt-6 font-serif "> Wlcome  to <br /><h2 className="text-6xl font-bold  text-blue-700   font-serif "> ArticleWebsite</h2> </h2>
                <h5 className="p-1 text-mist-700 mt-3 ">A simple space to read, write, and exlpore ideas-essays,thoughts,</h5>
                <h5 className="p-1 text-mist-700 ">and technical  writing all in one place</h5>
                <button className=" border-blue-800 bg-blue-700 rounded-lg text-l p-3 mt-3 font-bold text-white">browes Article</button>

            </div >
        </div>

    );
}
export default Home;