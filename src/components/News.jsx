// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const News = ({ query, language }) => {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&language=${language}&sortBy=publishedAt&apiKey=YOUR_API_KEY`);
//             setNews(response.data.articles);
//         };
//         fetchNews();
//     }, [query, language]);
//     return (
//         <div>
//             {news.length > 0 ? (
//                 news.map((article, index) => (
//                     <div key={index}>
//                         <h3>{article.title}</h3>
//                         <p>{article.description}</p>
//                         <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading news...</p>
//             )}
//         </div>)
// }

// export default News