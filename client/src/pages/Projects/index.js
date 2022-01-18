import React from 'react';
import { Col, Row, Card, Container, Button } from 'react-bootstrap';

const Project = () => {
    const Projects = [
        {
            title: 'Weather App',
            liveUrl: 'https://jakecaswell.github.io/weather-app/',
            githubUrl: 'https://github.com/jakecaswell/weather-app',
            description: "This is a weather application I built primarily using JS. I got the data from the current weather and five day forecast API's on openweathermap.",
            image: './assets/Weather-App.PNG'
        },
        {
            title: 'okFido',
            liveUrl: 'https://polar-refuge-82117.herokuapp.com',
            githubUrl: 'https://github.com/Benrowen5/ok-fido/tree/main',
            description: 'OkFido is a website for people looking to adopt pets. You can browse many different pets, and if you would like to you could sort them by their specific categories , i.e., cats or dogs. If you spot a pet that you really like, you can sign up and then "like" that pet and save it on your user dashboard! For this project we practiced our backend skills as well and created our own api, which we ended up fetching for the data on the front end. The people that collaborated on this project were Ben Rowen, Chanel Mitchell, and Paige Altemare',
            image: './assets/okFidoScreenshot.PNG'
        },
        {
            title: 'Stock Watchlist',
            liveUrl: 'https://d-mastrocola.github.io/Stock-Watchlist/',
            githubUrl: 'https://github.com/D-Mastrocola/Stock-Watchlist',
            description: "This is a group project that is meant to track various stocks by searching their ticker symbols. Your stocks that you pick are saved in localStorage, so don't worry about having to look the same ones up everytime you open the page! This was done using the finnhub api and google charts. My group members were Dominic Mastrocola, Thaddeus Smith, and Tracee Willis.",
            image: './assets/stock-watchlist.PNG'
        }
    ]

    return (
        <Container fluid>
            <Row>
                <Col><h1 className='text-center mt-3'>My Work</h1></Col>
                <Row className='d-flex justify-content-around'>
                {Projects.map((project) => (
                    <Col lg={3}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img className='ms-5' variant="top" src={require(`${project.image}`)} style={{width: '75%'}}/>
                        <Card.Body>
                            <Card.Title style={{fontSize: '24px'}}>{project.title}</Card.Title>
                            <Card.Text style={{fontSize: '16px'}}>
                                {project.description}
                            </Card.Text>
                            <Button className='ms-5' variant="primary" href={`${project.liveUrl}`} target="_blank">Live Demo</Button>
                            <Button className='ms-5' variant="primary" href={`${project.githubUrl}`} target="_blank">Source Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Row>
        </Container>
    )
}

export default Project;