import { Component } from "react";
import '../styles/imdbRate.css';

class RateButton extends Component {

    render() {
        return (
            <div className='rate-button-container'> 
                <p className='rate'>Rate Now</p>
            </div>
        );
    }
}

export default RateButton;