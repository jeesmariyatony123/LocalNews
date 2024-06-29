import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import images from '../assets/images/news.jpg';

// The NewsItem component takes in props for title, description, image source, and URL
const NewsItem = ({ title, description, src, url }) => {
  return (
    <Card className='mb-3 d-inline-block my-3 mx-3 px-2 py-2' style={{ maxWidth: '345px' }}>
      <Card.Img style={{ height: '200px', width: '325px' }} variant="top" src={src ? src : images} />
      <Card.Body>
        <Card.Title>{title.slice(0, 50)}</Card.Title>
        <Card.Text>
          {description ? description.slice(0, 90) : "News in the current event. It is information about something that has just happened."}
        </Card.Text>
        <Button variant="primary"><a style={{ textDecoration: "none", color: 'black' }} href={url}>Read more</a></Button>
      </Card.Body>
    </Card>)
}

export default NewsItem