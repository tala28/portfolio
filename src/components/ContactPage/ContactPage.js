import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Content from '../Content/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

export default class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3001/api/email', this.state)
            .then(res => {
                if(res.data.success){
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                }else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
        
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    render(){

        return(
            <div>
                <Hero title={this.props.title}/>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='message'>Message</Form.Label>
                            <Form.Control id='message' name='message' as='textarea' rows='3' value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className='d-inline-variant-primary' type='submit' disabled={this.state.disabled}>Send it!</Button>

                        {this.state.emailSent === true && <p className='d-iniline success-msg'>Success!</p>}
                        {this.state.emailSent === false && <p className='d-iniline err-msg'>Error!</p>}
                    </Form>
                </Content>
            </div>
        )
    }
}