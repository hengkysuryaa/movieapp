//https://movizark.com/2019/09/16/it-2-repeats-1-as-hustlers-exceeds-expectations-with-huge-opening-at-the-bo/ford_v_ferrari_ver2_xxlg/#main
import React, {Component} from 'react';
import '../styles/rating.css';
import ImdbRate from './ImdbRate.js';
import Metascore from './Metascore.js';
import RateButton from './RateButton.js';
import { HashRouter, NavLink } from 'react-router-dom';

class Rating extends Component {

    render() {
        return (
            <div className="rating-container">
                <HashRouter>
                <NavLink to="/"><img src='https://images4.alphacoders.com/104/thumb-1920-1046308.jpg' alt='ford v ferrari' className='movie-poster'/></NavLink>
                </HashRouter>
                <div className='rating-bar'>
                    <ImdbRate/>
                    <RateButton/>
                    <Metascore/>
                </div>
            </div>
        );
    }
}

export default Rating;