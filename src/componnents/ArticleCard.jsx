function ArticleCard({ title, author, content, image }) {
    return (
        <div>
            <img src={image} />
            <p>{title}</p>
            <div>
                <p>{content}</p>
                <p>{author}</p>
            </div>
        </div>

    );
}
export default ArticleCard;