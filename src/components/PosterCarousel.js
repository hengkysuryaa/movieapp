import React,{Component} from 'react';
import "../styles/poster.css";
import { HashRouter, NavLink } from 'react-router-dom';

class PosterCarousel extends Component {
    render() {
        return(
                <div className='wrapper'>
                    <HashRouter>
                    <div className='wrapper-item'>
                        <center>
                        <img className='picture' alt='none' src="https://resizing.flixster.com/enYPx96luLq0FWTdEpiWqX6rxMk=/206x305/v2/https://resizing.flixster.com/OCnoNZ2b2Z_Bpa0RX35IwYN1lLQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzZlZWEwMmY4LTk1OWUtNGEyOS04ODRmLTA0OWRjMzhlYWZkNi53ZWJw" />
                        <p className='movie-title-poster'>Parasite</p>
                        <span className='rating-star full-star'>8,6</span>
                        </center>
                    </div>
                    <div className='wrapper-item'>
                        <center>
                        <NavLink to="/view"><img className='picture' alt='none' src="https://resizing.flixster.com/lcvmsqR_mRMF6J093vq1qTnvFqo=/206x305/v2/https://resizing.flixster.com/R79OT2OvhEzHPVdgkCCV_ur1eHY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2VlZGY0ZDI0LTljZDItNDEwZi1iM2ZkLWY1NTQ5Y2M3M2Q4Mi53ZWJw"/></NavLink>
                        <p className='movie-title-poster'>Ford v Ferrari</p>
                        <span className='rating-star full-star'>8,2</span>
                        </center>
                    </div>
                    <div className='wrapper-item'>
                        <center>
                        <img className='picture' alt='none' src="https://resizing.flixster.com/51Q8Wm5zvrn0VcEv7fRhuf6DXgY=/206x305/v2/https://resizing.flixster.com/mxWCkewT0pWYekfI7x9Y8QKPh14=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzVlNDRiYTk4LTNmYjAtNDdlYi04ZGU0LTZiYjU3ODVjNWRkNi53ZWJw" />
                        <p className='movie-title-poster'>Knives Out</p>
                        <span className='rating-star full-star'>7,9</span>
                        </center>
                    </div>
                    </HashRouter>
                </div>
        );
    }
}

export default PosterCarousel;