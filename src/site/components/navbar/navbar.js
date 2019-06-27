import React from 'react';

import http from '../../../service/axios';

import './navbar.css';

import MediaQuery from 'react-responsive';
import {AppBar, Toolbar, IconButton, Drawer} from "@material-ui/core";
import TopBar from './topbar';
import {Link} from "react-router-dom";

import {Menu as MenuIcon} from "@material-ui/icons";

class NavBar extends React.Component{

    state = {
        img: {icon: null, alt: null},
        links: [],
        top: false
    };

    componentDidMount() {
        http.get('/navbar.json').then((res)=>{
            this.setState({...res.data});
        });
    }
    toogleDrawer = (side, open) => event => {
         if(event.type === 'keydown' && (event.key === 'TAB' || event.key === 'Shift')){
             return;
         }

         this.setState({...this.state, [side]:open});
    };

    render(){
        const img = this.state.img;

        return (
            <div className="root">
                <AppBar>
                    <Toolbar style={{backgroundColor: "yellowgreen"}}>
                        <img className="img" src={img.icon} alt={img.alt}/>
                        <p className="title" />
                        <MediaQuery maxWidth={600}>
                            {(matches)=>
                                matches ?
                                    <div>
                                        <IconButton onClick={this.toogleDrawer('top', true)} color="inherit" className="menuButton">
                                            <MenuIcon/>
                                        </IconButton>
                                        <Drawer anchor="top" open={this.state.top} onClose={this.toogleDrawer('top', false)}>
                                            <div className="pd-10">
                                                <TopBar links={this.state.links} />
                                            </div>
                                        </Drawer>
                                    </div>
                                    :
                                    this.state.links.map((item)=>
                                        <Link key={item.label} to={item.url} className="nav-link">{item.label}</Link>
                                    )
                            }
                        </MediaQuery>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

export default NavBar;
