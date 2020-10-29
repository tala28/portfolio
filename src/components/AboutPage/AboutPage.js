import React from 'react';
import Hero from '../Hero/Hero';
import Content from '../Content/Content';

export default function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}></Hero>
            <Content>
                <p>Some about me content, Some about me content, Some about me content, Some about me content, Some about me content</p>
                <p>Some about me content, Some about me content, Some about me content, Some about me content, Some about me content</p>
                <p>Some about me content, Some about me content, Some about me content, Some about me content, Some about me content</p>
                <p>Some about me content, Some about me content, Some about me content, Some about me content, Some about me content</p>
                <p>Some about me content, Some about me content, Some about me content, Some about me content, Some about me content</p>
            </Content>
        </div>
    )
}