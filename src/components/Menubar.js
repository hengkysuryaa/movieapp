import React,{Component} from 'react';
import '../styles/menubar.css'

class Menubar extends Component {

    render() {
        return(
            <div className='menu-bar-container'>
                <button className="menu-bar-button menu-bar-text active" autoFocus>In Theater</button>
                <button className="menu-bar-button menu-bar-text">Box Office</button>
                <button className="menu-bar-button menu-bar-text">Coming Soon</button>
            </div>
        );
    }
}

export default Menubar;