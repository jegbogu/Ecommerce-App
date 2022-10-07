import './NavBar.css'
import {Link} from 'react-router-dom';
const Navbar = ({click}) => {
    return ( 
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>LOGO</h2>
            </div>
          
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className='cart__link'>
                      <i className='fas fa-shopping-cart'></i>
                      <span>
                      Cart
                      </span>
                        
                        <span className='cartlogo__badge'>0</span>
                    
                    
                    </Link>
                </li>
                <li>
                    <Link to="/">
                   shop
                    </Link>
                </li>
            </ul>
 <div className="hamburger__menu" onClick={click}>
    <div></div>
    <div></div>
    <div></div>
</div>

        </nav>
     );
}
 
export default Navbar
;  