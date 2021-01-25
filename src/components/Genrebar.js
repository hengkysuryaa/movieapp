import { Component } from "react";
import data from '../data/genres.json' 
import '../styles/genrebutton.css'

class Genrebar extends Component {
    constructor() {
        super();
        this.state = {data : data};
    }

    render() {
        const genres = this.state.data.map((genre) => {
            return (
                <div key={genre.id}>
                    <button className='genre-button-style genre-name'>{genre.genre}</button>
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

export default Genrebar;