// import React, { useState } from 'react';
// import axios from 'axios';

// const NewsComponent = () => {
//   const [articles, setArticles] = useState([]);
//   const [query, setQuery] = useState('');
//   const [language, setLanguage] = useState('en');
  
//   const fetchNews = async () => {
//     try {
//       const response = await axios.get('https://newsapi.org/v2/everything', {
//         params: {
//           q: query,
//           language: language,
//           apiKey: 'YOUR_NEWSAPI_KEY', // Replace with your NewsAPI key
//         },
//       });
//       setArticles(response.data.articles);
//     } catch (error) {
//       console.error('Error fetching the news:', error);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchNews();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input 
//           type="text" 
//           value={query} 
//           onChange={(e) => setQuery(e.target.value)} 
//           placeholder="Search news..."
//         />
//         <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//           <option value="en">English</option>
//           <option value="es">Spanish</option>
//           <option value="fr">French</option>
//           {/* Add more languages as needed */}
//         </select>
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {articles.map((article, index) => (
//           <div key={index}>
//             <h2>{article.title}</h2>
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsComponent;