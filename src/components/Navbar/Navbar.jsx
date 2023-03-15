import './navbar.scss';
import logo from '../../images/logo.svg';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src={logo} alt='logo'/>
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
        </div>
        <div className='right'>
          <button className='login'>Login</button>
          <button className='signUp'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar