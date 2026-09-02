import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ArticleDetails() {
    const {id} =useParams();
    const [isLoding, setIsloding] = useState(true);
      const [isErorr, setIsErorr] = useState(null);
      const [articles, setArticle] = useState(null);

    useEffect(() => {
    async function getData() {
      try {
        setIsloding(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setArticle(response.data);
      } catch (err) {
        setIsErorr("there is Erorr unexpected")
      } finally {
        setIsloding(false);
      }
    }
    getData();
  }, [id])


  if (isLoding)return <p>Loading...</p>
  if(isErorr) return <p>{isErorr}</p>

return(
  <div className=" bg-white rounded-xl shadow-md flex  flex-col items-center mt-5 p-6 justify-center">
    <h2  className=" font-bold text-center text-blue-600">{articles?.title}</h2>
    <p className="text-gray-700">{articles?.body}</p>
  </div>
)
}
export default ArticleDetails;