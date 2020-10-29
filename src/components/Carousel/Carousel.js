import React, { Component } from 'react';
import Card from '../Card/Card';
import projectOne from '../../assets/images/projectOne.jpg';
import projectTwo from '../../assets/images/projectTwo.jpg';
import projectThree from '../../assets/images/projectThree.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Project 1',
                    subTitle: 'Project 1 description',
                    imgSrc: projectOne,
                    link: 'deployed project link',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    subTitle: 'Project 2 description',
                    imgSrc: projectTwo,
                    link: 'deployed project link',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subTitle: 'Project 3 description',
                    imgSrc: projectThree,
                    link: 'deployed project link',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id)
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}