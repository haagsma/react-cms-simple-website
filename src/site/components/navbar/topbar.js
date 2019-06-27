import React from 'react';
import './navbar.css';

import {Link} from "react-router-dom";

class TopBar extends React.Component {

    state = {menu: null};

    componentDidMount() {

        let menu = this.props.links.map((item) =>
                <li key={item.label} className="li"><Link to={item.url} className="link">{item.label}</Link></li>
        );
        this.setState({menu: menu});

    }

    render() {
        return (
            this.state.menu
        )
    }
}

export default TopBar;
