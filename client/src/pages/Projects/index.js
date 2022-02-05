import React from 'react';
import { Col, Row, Card, Container, Button } from 'react-bootstrap';

const Project = () => {
    const Projects = [
        {
            title: 'Weather App',
            liveUrl: 'https://jakecaswell.github.io/weather-app/',
            githubUrl: 'https://github.com/jakecaswell/weather-app',
            description: "This is a weather application built using JS and openWeather api",
            image: './assets/Weather-App.PNG'
        },
        {
            title: 'okFido',
            liveUrl: 'https://polar-refuge-82117.herokuapp.com',
            githubUrl: 'https://github.com/Benrowen5/ok-fido/tree/main',
            description: 'okFido is a website for people looking to adopt pets. ',
            image: './assets/okFidoScreenshot.PNG'
        },
        {
            title: 'Stock Watchlist',
            liveUrl: 'https://d-mastrocola.github.io/Stock-Watchlist/',
            githubUrl: 'https://github.com/D-Mastrocola/Stock-Watchlist',
            description: "App where you can save and track stocks.",
            image: './assets/stock-watchlist.PNG'
        },
        {
            title: 'Imperium',
            liveUrl: 'https://imperium10.herokuapp.com/',
            githubUrl: 'https://github.com/smaheilman/project-3',
            description: 'MERN app where users can create, save, and bid on jobs!',
            image: './assets/imperiumScreenshot.PNG'
        }
    ]

    return (
        <Container fluid>
            <Row>
                <Col><h1 className='text-center mt-3'>My Work</h1></Col>
                <Row className='d-flex justify-content-around'>
                {Projects.map((project) => (
                    <Col lg={3}>
                    <Card className='ms-5' style={{ width: '25rem' }}>
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