import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import http from '../../../service/axios';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles2 = theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default
    },
    img: {
        maxHeight: 700,
        height: '100%',
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        marginTop: 70
    }

});

class Carousel extends React.Component {

    state = {
        img: [],
        activeStep: 0
    };

    async componentDidMount() {
        const res = await http.get('/carousel.json');
        this.setState({img: res.data});

    }
    setStep(step){
        this.setState({activeStep: step});
    }


    render() {
       const classes = this.props.classes;
       const handleStepChange = (step) => this.setStep(step);
       const handleNext = () => this.setStep(this.state.activeStep + 1);
       const handleBack = () => this.setStep(this.state.activeStep - 1);

       return (
           <div className={classes.root}>
               <AutoPlaySwipeableViews
                   index={this.state.activeStep}
                   onChangeIndex={handleStepChange}
                   enableMouseEvents
               >
                   {
                       this.state.img.map((step, index)=>(
                           <div key={step.label}>
                               {Math.abs(this.state.activeStep - index) <= 2 ? (
                                   <img className={classes.img} src={step.imgPath} alt={step.label} />
                               ) : null}
                           </div>
                       ))
                   }
               </AutoPlaySwipeableViews>
               <MobileStepper
                   steps={this.state.img.length}
                   position="static"
                   variant="dots"
                   activeStep={this.state.activeStep}
                   nextButton={
                       <Button size="small" onClick={handleNext} disabled={this.state.activeStep === this.state.img.length -1}>
                           <KeyboardArrowRight />
                       </Button>
                   }
                   backButton={
                       <Button size="small" onClick={handleBack} disabled={this.state.activeStep === 0}>
                           <KeyboardArrowLeft />
                       </Button>
                   }
               />
           </div>
       )
   }
}

export default withStyles(useStyles2)(Carousel);
