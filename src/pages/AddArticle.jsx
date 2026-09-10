import { useState } from "react";


function AddArticle({ add }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !body.trim()) {
            alert("You should fill all fields");
            return;
        }

        add({
            id: Date.now(),
            title: title,
            body: body,
        });

        setTitle("");
        setBody("");
    };

    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-6 mb-4 font-serif">
                Add New Article
            </h2>

            <div className="flex justify-center p-3">
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-300 rounded-xl p-7 w-[70%]"
                >
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Title</label>

                        <input
                            type="text"
                            placeholder="Enter the title.."
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            className="border border-black rounded-xl p-2 w-full bg-white"
                        />

                        <label className="font-bold">Content</label>

                        <textarea
                            placeholder="Enter the body.."
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                            className="border border-black rounded-xl p-2 w-full h-40 bg-white"
                        ></textarea>

                        <button
                            type="submit"
                            className="font-bold text-white text-center bg-blue-600 rounded-xl w-full mt-4 py-1"
                        >
                            Publish Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddArticle;