import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Users from './pages/Users';
import AdminCms from './pages/AdminCms';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/profile" element={<Profile/>}/>}
                <Route path="/users" element={<Users/>} />
                <Route path="/admin-cms" element={<AdminCms/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App