import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import images from '../assets/images/news.jpg';
import Weather from './Weather';

const NewsBoard = ({ category }) => {

    // State variables to manage query, language, sort option, and articles
    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState('en');
    const [sortBy, setSortBy] = useState('publishedAt')
    const [articles, setArticles] = useState([]);

    // Function to fetch news articles based on query, language, and sort option
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

    return (
        <div >
            <div>
                <Row >
                    <Col xs={12} s={12} md={6} lg={6}>
                        <Weather />
                    </Col>
                    <Col xs={12} s={12} md={6} lg={6}>
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

                <div className='text-dark p-5'>
                    {articles.map((article, index) => (
                        <div key={index}>
                            <Container className='px-5'>
                                <Row>
                                    <Col xs={12} s={12} md={6} lg={6}>
                                        <Card.Img style={{ height: '250px', width: '450px' }} variant="top" src={article.urlToImage ? article.urlToImage : images} />
                                    </Col>
                                    <Col xs={12} s={12} md={6} lg={6}>
                                        <h2 className='text-dark'>{article.title}</h2>
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
        </div>
    )
}

export default NewsBoard