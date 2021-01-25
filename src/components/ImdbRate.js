import { Component } from "react";
import '../styles/imdbRate.css';

class ImdbRate extends Component {

    render() {
        return (
            <div className='imdb-container'> 
                <center><span className='rating-star-view full-star-view'></span></center>
                <p className='rate'>8.2/10</p>
                <p className='votes'>150,212</p>
            </div>
        );
    }
}

export default ImdbRate;