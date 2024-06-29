import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

const Weather = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use effect to get the user's location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          console.error('Error getting geolocation', err);
          setError('Geolocation permission denied. Please reset your permissions.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  // Use effect to fetch the city name based on the location
  useEffect(() => {
    if (location.lat && location.lon) {
      fetchCityName(location.lat, location.lon);
    }
  }, [location]);

  // Use effect to fetch the weather data based on the city name
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  // Function to fetch the city name using reverse geocoding
  const fetchCityName = async (lat, lon) => {
    const apiKey = 'a4ecdcbafa7a1d84e5c50a975a993646';
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data && response.data.length > 0) {
        setCity(response.data[0].name);
      } else {
        setError('Unable to fetch city name');
      }
    } catch (error) {
      console.error('Error fetching the city name', error);
      setError('Error fetching the city name');
    }
  };

   // Function to fetch the weather data based on the city name
  const fetchWeather = async (cityName) => {
    const apiKey = 'a4ecdcbafa7a1d84e5c50a975a993646';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
      setError('Error fetching the weather data');
    } finally {
      setLoading(false);
    }
  };

   // Loading state while fetching data
  if (loading) {
    return (
      <Container className="my-4 text-center">
        <Spinner animation="border" />
        <p>Loading weather data...</p>
      </Container>
    );
  }

  // Error state if there was an error fetching data
  if (error) {
    return (
      <Container className="my-4">
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      {weather ? (
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className='weatherimage'>
              <Card.Body className='text-white'>
                <Card.Title>{weather.name}</Card.Title>
                <Card.Text>
                  <strong>Temperature:</strong> {weather.main.temp}°C
                </Card.Text>
                <Card.Text>
                  <strong>Weather:</strong> {weather.weather[0].description}
                </Card.Text>
                <Card.Text>
                  <strong>Humidity:</strong> {weather.main.humidity}%
                </Card.Text>
                <Card.Text>
                  <strong>Wind Speed:</strong> {weather.wind.speed} m/s
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>Unable to fetch weather data</p>
      )}
    </Container>
  );
};

export default Weather;