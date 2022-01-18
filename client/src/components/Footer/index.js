import React from 'react';

const Footer = () => {
    return (
        <footer>
            <a href='https://github.com/jakecaswell' target="_blank"><img src={require('./assets/github-logo.png')} alt='github logo' style={{height: '65px', borderRadius: '50px'}}/></a>
            <a href='https://www.linkedin.com/in/jake-caswell-90b73616b/' target="_blank"><img src={require('./assets/linked-in-logo.png')} alt='linkedIn logo' style={{height: '65px', borderRadius: '50px'}}/></a>
        </footer>
    )
}

export default Footer;