import { Component } from "react";
import NavBar from '../components/NavBar.js'
import Menubar from '../components/Menubar.js'
import Genrebar from '../components/Genrebar.js'
import PosterCarousel from '../components/PosterCarousel.js'
class HomePage extends Component {

    render() {
        return(
            <div>
                <NavBar/>
                <Menubar/>
                <Genrebar/>
                <PosterCarousel/>
            </div>
        );
    }
}

export default HomePage;