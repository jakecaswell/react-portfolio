import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    const technologies = [
        {
            name: 'CSS',
            image: './assets/css-logo.png'
        },
        {
            name: 'React',
            image: './assets/feature-react.png'
        },
        {
            name: 'HTML',
            image: './assets/html-logo.png'
        },
        {
            name: 'JavaScript',
            image: './assets/js-logo.png'
        },
        {
            name: 'MongoDB',
            image: './assets/mongo-logo.png'
        },
        {
            name: 'Node.js',
            image: './assets/node-logo.jpg'
        },
        {
            name: 'MySQL',
            image: './assets/sql-logo.jpg'
        }
    ]

    return (
        <Container fluid>
            <Row>
                <Col><h1 className='text-center mt-3'>About Me</h1></Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col lg={5}><p className='text-center mt-3'>An aspiring Web Developer based in Toledo Ohio. I have both front-end and back-end skills and have practiced the MERN stack (MongoDB, Express, React, and Node).</p></Col>
            </Row>
            <div className='about-technologies'>
                <Row className='d-flex justify-content-between'>
                    <Row>
                        <Col>
                            <div>
                                <h3>Technologies Known</h3>
                            </div>
                        </Col>
                    </Row>
                    {technologies.map((tech, index) => (
                         <Col lg={3} className='d-flex mt-5'>
                        <Card className='ms-3 me-3' style={{ width: '18rem' }}>
                        <Card.Img className='d-flex justify-content-center' variant="top" src={require(`${tech.image}`)} style={{height: "65px", width: "65px", borderRadius: "10px"}}/>
                        <Card.Body>
                          <Card.Title>{tech.name}</Card.Title>
                        </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container> 
    )
}

export default About;