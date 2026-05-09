import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className='app-navbar'>
            <Link to='/' className='app-navbar__logo'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                </svg> */}
                InterviewAI
            </Link>
            <div className='app-navbar__links'>
                <Link to='/login'>Login</Link>
                <Link to='/register' className='app-navbar__cta'>Get Started</Link>
            </div>
        </nav>
    )
}

export default Navbar