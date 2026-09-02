import { Link } from "react-router";

function ArticleCard({ id, title, body, handleDelete }) {
    function handleDeleteClick() {
        const confirmed = window.confirm("Are You Sure ?")
        if (!confirmed) return;
        handleDelete(id);
    }
    return (

        <div className="p-5 w-72 bg-white border-purple-600 rounded-xl shadow-md flex flex-col justify-between ">
            <p className=" font-bold text-center text-blue-600">{title}</p>
            <div>
                <p>{body}</p>
                <div className="grid grid-cols-2">
                    <Link to={`/article/${id}`} className="text-blue-500 font-bold ">See More</Link>
                    <button onClick={handleDeleteClick} className="bg-red-500 rounded-xl text-white p-1">🗑️Delete</button>
                </div>
            </div>
        </div>


    );
}
export default ArticleCard;