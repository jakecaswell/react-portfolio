import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
                <Row>
                    {technologies.map((tech, index) => (
                        <Col lg={2} className='mb-5 d-flex justify-content-around'>
                            <img src={require(`${tech.image}`)}
                            style={{height: "65px", width: "65px", borderRadius: "15px"}}/>
                            <span className='d-flex align-middle'>{tech.name}</span>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container> 
    )
}

export default About;