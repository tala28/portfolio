import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Tala Hawari',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/About' },
        { title: 'Contact', path: '/Contact' }
      ],
      home: {
        title: 'Catchy Title Here',
        subTitle: 'Projects Here',
        text: 'Check them out!'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Contact me!'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Tala Hawari</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text}/>} />
          <Footer/>
        </Container>
      </Router>
    );
  }
}