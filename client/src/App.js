import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Auth from "./pages/Auth/Auth";
import { Home } from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
        <div className="blur" style={{top:'-18%',right:'0'}}></div>
        <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
        <Routes>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        
        
        
        {/* <Auth/> */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
