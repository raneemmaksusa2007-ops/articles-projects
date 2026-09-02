
import ArticleCard from '../componnents/ArticleCard'
function Articles({ articles, handleDelete}) {

    return (

        <div className='flex flex-wrap justify-center p-5  gap-6'>
            {
                articles.map(article => (
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
    );
}
export default Articles;