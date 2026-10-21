import { useState } from "react";
import { useAuth } from "../content/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";


function AddArticle() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { token } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title === "" || body === "") {
            alert("You should fill all fields");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await axios.post(
                "http://127.0.0.1:8000/api/articles",
                {
                    title: title,
                    body: body,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Article published successfully!");

            navigate("/articles");
        } catch (err) {
            console.error(err);
          
            setError(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
            setTitle("");
            setBody("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 px-8 py-10">
            <div className="max-w-xl mx-auto">
                <div className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                    <h1>Add New Article</h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 flex flex-col gap-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter the title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Content
                        </label>

                        <textarea
                            placeholder="Enter the content..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            rows={5}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? "Publishing..." : "Publish Article"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddArticle;