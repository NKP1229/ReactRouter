import { Link } from "react-router-dom"
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
function NavBar() {
    return(
        <>
            <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/multi">Multi</Link>
            </div>
        </>
    )
}
export default NavBar;