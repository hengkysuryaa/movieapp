import { Component } from "react";
import '../styles/imdbRate.css';

class Metascore extends Component {

    render() {
        return (
            <div className='imdb-container'> 
                <p className='rate'>Metascore</p>
                <p className='votes'>62 critic views</p>
            </div>
        );
    }
}

export default Metascore;