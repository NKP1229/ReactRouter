import { Routes, Route } from "react-router-dom"
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import MultiColor from "./MultiColor"
function MainRoutes(){
    return(
        <>
          <div id="main-section">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/blue" element={<Blue />}/>
                <Route path="/red" element={<Red />}/>
                <Route path="/multi" element={<MultiColor/>}/>
            </Routes>
          </div>
        </>
    )
}
export default MainRoutes;