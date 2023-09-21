import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div id='navbar'>
                <div id='navbar1'>
                    <div>
                        logo
                    </div>
                    <div>
                        browse
                    </div>
                    <div>
                        drops
                    </div>
                    <div>
                        about
                    </div>
                </div>

                <NavLink to='/login'>
                    <div className='text-xl font-bold underline'>
                        login
                    </div>
                </NavLink>

            </div>
        </>
    )
}

export default NavBar