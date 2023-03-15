import './footer.scss';
import logo from '../../images/footer-logo.svg';
import fb from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import ig from '../../images/icon-instagram.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className='left'>
        <img src={logo} alt='logo-img'/>
      </div>
      <div className='right'>
        <div className='list'>
          <h3>Features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className='list'>
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className='list'>
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contract</p>
        </div>
        <div className='icons'>
          <img src={fb} alt='fb-logo'/>
          <img src={twitter} alt='twitter-logo'/>
          <img src={pinterest} alt='pinterest-logo'/>
          <img src={ig} alt='ig-logo'/>
        </div>
      </div>
    </div>
  )
}

export default Footer