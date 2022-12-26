import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal"
import {useState} from 'react'
import {useCookies} from "react-cookie"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [userSignUp, setuserSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setuserSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setuserSignUp={setuserSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Swipe Right®</h1>
                <button className="home-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
                { authToken && 
                        <>
                <br/>
                    <button className="home-button" onClick={handleClick}>
                    Profile
                </button>
                <br/>
                <button className="home-button" onClick={handleClick}>
                    Pets
                </button>
                </>
                }


                {showModal && (
                    <AuthModal setShowModal={setShowModal} userSignUp={userSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home