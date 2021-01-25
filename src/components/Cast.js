import React, {Component} from 'react';
import data from '../data/cast.json' 
import '../styles/Cast.css';

class Cast extends Component {
    constructor() {
        super();
        this.state = {data : data};
    }

    render() {
        const casts = this.state.data.map((cast) => {
            return (
                <div key={cast.id} className="placeholder">
                    <center> <img src={cast.url} alt={cast.name} className='picture-circle'/> </center>
                    <p className='firstname'>{cast.firstname}</p>
                    <p className='lastname'>{cast.lastname}</p>
                    <p className='role-name'>{cast.role}</p>
                </div>
            );
        });

        return (
            <div className='div-cast'>
                <p className='title'> Cast & Crew </p>
                {casts}
            </div>
        );
    }
}

export default Cast;