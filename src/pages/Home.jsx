import { useState } from "react";

function Home() {
    const [count, setcount]=useState(0);

    return (
        < div >
        <p>{count}</p>
        <button onClick={() => setcount(count+1)}>increase</button>
        <button onClick={() => setcount(count-1)}>dicrease</button>
        <button onClick={() => setcount(0)}>reaset</button>
        </div >
    );
}
export default Home;