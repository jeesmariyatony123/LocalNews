import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import images from '../assets/images/news.jpg';

const NewsBoard = ({ category }) => {

    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState('en');
    const [sortBy, setSortBy] = useState('publishedAt')
    const [articles, setArticles] = useState([]);

    // const [newslist, setNewsList] = useState([]);


    const searchNews = async () => {
        const apiKey = '62e68607b8744703b1014df2e828e22f';
        const url = 'https://newsapi.org/v2/everything';
        const params = {
            q: query,
            from: '2024-06-01',
            to: '2024-06-29',
            language: language,
            sortBy: sortBy,
            apiKey: apiKey,
        };

        try {
            const response = await axios.get(url, { params });
            setArticles(response.data.articles);
        } catch (error) {
            console.error('Error fetching the news articles', error);
        }
    };
    // useEffect(() => {
    //     // let url = `https://newsapi.org/v2/everything?q=bitcoin&country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    //     let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setNewsList(data.newslist));
    // }, [category])

    return (
        <div className='bg-dark'>
            <div>
                {/* <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for news..."
                />
                <button onClick={searchNews}>Search</button> */}

                {/* <Form inline className='d-flex justify-content-center align-items-center py-5'>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                onChange={(e) => setQuery(e.target.value)}
                                type="text"
                                value={query}
                                placeholder="Search for news..."
                                className=" mr-sm-2"
                                size="lg"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button onClick={searchNews} type="submit" size="lg"
                            >Search</Button>
                        </Col>
                    </Row>
                </Form> */}
                <Row >
                    <Col >
                        <Form inline className='d-flex justify-content-center align-items-center pt-5'>
                            <Form.Group controlId="searchQuery" >
                                <Form.Control
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search for news..."
                                    size="lg"
                                />
                            </Form.Group>
                            <Form.Group controlId="languageSelect" className="px-2">
                                <Form.Control
                                    as="select"
                                    value={language} 
                                    onChange={(e) => setLanguage(e.target.value)}
                                    size="lg"
                                >
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="it">Italian</option>
                                    <option value="ru">Russian</option>
                                    <option value="zh">Chinese</option>
                                    {/* Add more languages as needed */}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="sortSelect" className="px-2" >
                                <Form.Control
                                    as="select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    size="lg"
                                >
                                    <option value="publishedAt">Date Published</option>
                                    <option value="relevancy">Relevancy</option>
                                    <option value="popularity">Popularity</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" onClick={searchNews} size="lg">
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <div className='text-light p-5'>
                    {articles.map((article, index) => (
                        <div key={index}>
                            <Container className='px-5'>
                                <Row>
                                    <Col xs={12} s={12} md={6} lg={6}>
                                        <Card.Img style={{ height: '250px', width: '450px' }} variant="top" src={article.urlToImage ? article.urlToImage : images} />
                                    </Col>
                                    <Col xs={12} s={12} md={6} lg={6}>
                                        <h2 className='text-light'>{article.title}</h2>
                                        <p >{article.description}</p>
                                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                                            Read more
                                        </a>
                                        <Card.Footer>
                                            <small className="text-muted">Published on {new Date(article.publishedAt).toLocaleString()}</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Container>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            {/* <h2 className='text-center text-dark py-4'>Latest <span className='badge bg-danger'>News</span></h2>
            {newslist.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })} */}


        </div>
    )
}

export default NewsBoard