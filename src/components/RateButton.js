import { Component } from "react";
import '../styles/imdbRate.css';

class RateButton extends Component {

    render() {
        return (
            <div className='rate-button-container'>
                <center><span className='rating-star empty-star'></span></center> 
                <p className='rate'>Rate This</p>
            </div>
        );
    }
}

export default RateButton;