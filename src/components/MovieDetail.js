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
                <p>Ford vs Ferrari</p>
                <p className="detail">2019</p>
                <p className="detail">PG-13</p>
                <p>2h 32min</p> <br/>
                <button className='button-style'> + </button>
            </div>
        );
    }
}

export default MovieDetail;