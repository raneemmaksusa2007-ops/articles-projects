
import ArticleCard from '../componnents/ArticleCard'
function Articles() {

    const articles = [
        {
            id: 1,
            title: "raect",
            author: "raneem",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmclMjByZWFjdHxlbnwwfHwwfHx8MA%3D%3D",
            content: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly"

        },
        {
            id: 2,
            title: "raect",
            author: "raneem",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmclMjByZWFjdHxlbnwwfHwwfHx8MA%3D%3D",
            content: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly"

        },
        {
            id: 3,
            title: "raect",
            author: "raneem",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmclMjByZWFjdHxlbnwwfHwwfHx8MA%3D%3D",
            content: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly"

        },
        {
            id: 4,
            title: "raect",
            author: "raneem",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmclMjByZWFjdHxlbnwwfHwwfHx8MA%3D%3D",
            content: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly"

        },
    ]
    return (
        <div className='grid grid-cols'>
            {
                articles.map(article => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        auther={article.auther}
                        image={article.image}
                        content={article.content}
                    />
                ))
            }
        </div>
    );
}
export default Articles;