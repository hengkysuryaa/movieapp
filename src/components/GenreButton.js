import React, {Component} from 'react';
import '../styles/genrebutton.css';
import data from '../data/movies.json';

class GenreButton extends Component {

    constructor() {
        super();
        this.state = {data : data};
    }

    // render () {
    //     return (
    //         <div className='container-genre'> 
    //             <button className='genre-button-style genre-name'>Drama</button>
    //         </div>
    //     );
    // }

    render() {
        const genres = this.state.data.genre.map((gen) => {
            return (
                <div key={gen.id}>
                   <button className='genre-button-style genre-name'>{gen.name}</button>
                </div>
            );
        });

        return (
            <div className='container-genre'>
                {genres}
            </div>
        );
    }

}

export default GenreButton;