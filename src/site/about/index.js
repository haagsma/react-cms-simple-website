import React from 'react';
import './style.css';
import http from '../../service/axios';

import {Container} from "@material-ui/core";

class About extends React.Component {

    state = {
      title: null,
      img: {},
      text: ''
    };

    async componentDidMount() {
        const res = await http.get('/about.json');
        this.setState({...res.data});
    }

    render() {
        const state = this.state;
        return (
            <Container className="mg-top-110 center">
                <h1>{state.title}</h1>
                <img className="img-about" src={state.img.src} alt={state.img.alt} />

                <p>
                    {state.text}
                </p>

            </Container>
        )
    }
}
export default About;
