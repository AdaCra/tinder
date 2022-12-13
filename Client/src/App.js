import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>;
        <Route path = "/profile" element = {<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
