import { useState } from "react";
import { Link } from "react-router";

function ArticleCard({ id, title, body, handleDelete }) {
    function handleDeleteClick() {
        const confirmed = window.confirm("Are You Sure ?")
        if (!confirmed) return;
        handleDelete(id);
    }
    const [isFav, setIFav] = useState(false);

    return (
        <div>

            <div className="relative p-5 border bg-white border-gray-200 rounded-xl shadow-md flex flex-col justify-between">
                <button onClick={() => setIFav(!isFav)} className="absolute right-5 size-6">{isFav ? "❤️" : "🤍"} </button>
                <h1 className=" font-bold text-left text-blue-800 text-xl line-clamp-2 ">{title}</h1>
                <div>
                    <p className="line-clamp-3">{body}</p>
                    <div className="grid grid-cols-2 mt-3">
                        <Link to={`/article/${id}`} className="text-blue-700 font-bold ">See More</Link>
                        <button onClick={handleDeleteClick} className="bg-red-500 rounded-xl text-white p-1 ">🗑️Delete</button>
                    </div>
                </div>
            </div >
        </div>

    );
}
export default ArticleCard;