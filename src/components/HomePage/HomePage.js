import React from 'react';
import Carousel from '../Carousel/Carousel';
import Hero from '../Hero/Hero'

export default function HomePage(props){
    return(
        <>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Carousel/>
        </>
    )
}