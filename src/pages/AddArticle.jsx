import { useState } from "react";

function AddArticle({ onAdd }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !body.trim()) {
            alert("you should fill all fields")
            return;
        }



        onAdd({
            id: Date.now(),
            title: title,
            body: body
        })
    }

    return (
        <div  >
            < div  >
                <h2 className="flex justify-center  text-5xl font-bold    items-center mt-6 font-serif "> Add New Article</h2>
            </div >
            <div className="flex justify-center items-center flex-col  p-3">
                <form onSubmit={handelSubmit} className="bg-gray-300 rounded-xl p-7   ">
                    <h5 className="font-bold">Title</h5>
                    <input type='text' placeholder='Enter the title..' value={title} onChange={(event) => setTitle(event.target.value)}  className="border rounded-xl p-2  pr-70" />
                    <h5 className="font-bold">Content</h5>
                    <input type='text' placeholder='Enter the body..' value={body} onChange={(event) => setBody(event.target.value)} className="border rounded-xl pb-30 p-2 pt-2 pr-70" />
                    <button type='submit' className="flex font-bold mt-6 bg-blue-600 rounded-xl text-white text-center justify-center pl-45 p-3  pr-50">Publish Article</button>
                </form>
            </div>

        </div>
    );
}
export default AddArticle;
