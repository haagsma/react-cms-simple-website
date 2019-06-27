import React from 'react';
import {
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    Button,
    withStyles
} from "@material-ui/core";

const useStyles = {
    card: {
        maxWidth: 345,
        minWidth: 200,
        maxHeight: 300
    },
    media: {
        height: 140
    },
    cardAction: {
        maxWidth: 300
    }

};

class CardTopico extends React.Component {
    state = {
        img: {},
        body: {}
    };

    componentDidMount() {
        this.setState({...this.props.card});
    }

    render() {

        const state = this.state;
        const classes = this.props.classes;

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={state.img.src}
                        title={state.img.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {state.body.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {state.body.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" >
                        See more
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(useStyles)(CardTopico);
