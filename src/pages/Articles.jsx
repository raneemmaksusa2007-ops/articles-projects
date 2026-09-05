
import { useState } from 'react';
import ArticleCard from '../componnents/ArticleCard'
function Articles({ articles, handleDelete }) {

    const [search, setSearch] = useState("");
    const filterArticles = articles.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h1 className="flex  text-4xl font-bold  pl-5 mt-3 font-serif ">Articles</h1>
            <p className='pl-5 mt-2'>Discover and read amazing articles</p>
            <div className='w-[45%] relative ml-5'>
                <input type="text" placeholder='Search article...' className='outline-0  p-3 mt-5 border-2 border-blue-600 w-full rounded-br-3xl rounded-r-3xl rounded ' value={search} onChange={(e) => setSearch(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-4 top-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <div className='grid grid-cols-4 justify-center p-5  gap-6'>
                {
                    filterArticles.map(article => (
                        <ArticleCard
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            body={article.body}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default Articles