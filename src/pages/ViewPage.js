import Summary from '../components/Summary.js';
import Cast from '../components/Cast.js';
import MovieDetail from '../components/MovieDetail.js';
import GenreButton from '../components/GenreButton.js';
import Rating from '../components/Rating.js';
import { Component } from 'react';

class ViewPage extends Component {
    render() {
        return (
            <div>
                <Rating/>
                <MovieDetail/>
                <GenreButton/>
                <Summary/>
                <Cast/>
            </div>
        );
    }
}

export default ViewPage;