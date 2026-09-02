import { useState } from "react";

function Home() {
    const [count, setcount] = useState(0);

    return (
        <div>
            < div  >
                <h2 className="flex justify-center  text-5xl font-bold    items-center mt-60 font-serif "> Wlcome to ArticleWebsite</h2>
                <h5 className="flex justify-center p-1 text-mist-700    items-center">A simple space to read, write, and exlpore ideas-essays,thoughts, and technical  writing all in one place</h5>
    
            </div >
        </div>

    );
}
export default Home;