import React, {Component} from 'react';
import '../styles/moviedetail.css';


class MovieDetail extends Component {

    // constructor() {
    //     super();
    //     this.state = {data : data};
    // }

    render () {
        return (
            <div className='container-detail'> 
                <button className='button-style'> + </button>
                <p className='movie-title'>Ford v Ferrari</p>
                <p className='detail'>2019</p>
                <p className='detail'>PG-13</p>
                <p className='detail'>2h 32min</p>
            </div>
        );
    }
}

export default MovieDetail;