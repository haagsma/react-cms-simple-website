import React from 'react';

import {Container, Grid} from "@material-ui/core";
import Carousel from "./components/carousel";
import CardTopico from "./components/cardTopico";

import http from '../service/axios';

class Site extends React.Component {

    state = {
        head: {
            title: '',
            img: {}
        },
        cards: []
    };

    async componentDidMount() {
        const res = await http.get('/corpo.json');
        this.setState({...res.data});
    }

    render() {
        const img = {
            width: '80%',
            height: '100%',
            maxHeight: 600,
            textAlign: 'center'
        };

        return (
            <div>
                <Carousel/>
                <Container>
                    <h1 style={{textAlign: 'center'}}>{this.state.head.title}</h1>
                    <div style={{textAlign: 'center'}}>
                        <img style={img} src={this.state.head.img.src} alt="Home" />
                    </div>
                    <h1 style={{textAlign: 'center'}}>{this.state.head.title}</h1>
                    <Grid container spacing={2}>
                        {this.state.cards.map((item, index)=>(
                            <Grid key={index} item xs>
                                <CardTopico card={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Site;
