import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import './styles/global.css'

import NavBar from './components/UI/NavBar.jsx'

import Landing from './pages/landing/Landing.jsx'
import SignIn from './pages/signin/SignIn.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import UITest from './test/UITest.jsx'

import Footer from './components/UI/Footer.jsx'
import { Link } from 'react-router-dom'
import { useMazeContext } from './context/Context.jsx'
import { Navigate } from 'react-router-dom'


function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
                {/* <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/report" element={<Report />} /> */}
                <Route path='/testing' element={<UITest />} />
            </Routes>
            <Footer />
        </Router>
    )
}

const PrivateRoute = ({ element }) => {
    const {token} = useMazeContext()

    return token ? element : <Navigate to="/signin" />
}

export default App