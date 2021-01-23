import React, {Component} from 'react';
import '../styles/Summary.css';

class Summary extends Component {

    render(){
        return(
            <div className='div-summary'>
                <p className='summary-title'> Plot Summary </p>
                <p className='summary-content'> American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order. </p>
            </div>
        );
    }
}

export default Summary;