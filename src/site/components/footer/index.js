import React from 'react';

const footer = {
    div: {
        width: '100%',
        height: '100%',
        maxHeight: 400,
        backgroundColor: '#000'
    },
    copy: {
        color: '#fff',
        textAlign: 'center',
        padding: 50
    }
};

const Footer = () => (
    <div style={footer.div}>
        <p style={footer.copy}>@copy hahahaha</p>
    </div>
);

export default Footer;
