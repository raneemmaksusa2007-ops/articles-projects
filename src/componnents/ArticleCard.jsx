import { Link, useNavigate } from "react-router";
import { useAuth } from "../content/AuthContext";
import { useState } from "react";
import axios from "axios";

function ArticleCard({ id, title, body, userId, onDelete }) {
    const [loading, setLoading] = useState(false);
    const { user, token } = useAuth();

    const handleDeleteClick = async () => {
        const confirmed = window.confirm("Are you sure?");
        if (!confirmed) return;
        try {
            setLoading(true);
            const response = await axios.delete(`http://127.0.0.1:8000/api/articles/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            onDelete(id);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {title}
                </h2>

                {
                 user?.id === userId ? (
                    <div className="article-actions flex gap-2">
                        <Link to={`/edit/${id}`} className="edit-btn">Edit</Link>
                        <button
                            onClick={handleDeleteClick}
                           className="delete-btn text-red-500 border border-red-200 rounded-md px-3 py-1 text-sm flex items-center gap-1"
                        >
                            {loading ? "🗑️ Delete..." : "🗑️ Delete"}

                        </button>
                    </div>
                ) :(<></>)}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                {body}
            </p>

            <hr className="border-gray-100 mb-4" />

            <div className="flex items-center justify-between">
                <Link
                    to={`/article/${id}`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                >
                    Read full article
                </Link>
            </div >
        </div >

    );

}

export default ArticleCard;