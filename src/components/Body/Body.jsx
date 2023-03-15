import './body.scss';
import IMG from '../../images/illustration-working.svg';

function Body() {
  return (
    <div className='bodyComponent'>
        <div className='left'>
            <div className='description'>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            </div>
            <button>Get Started</button>
        </div>
        <div className='right'>
            <img src={IMG} alt='illustration-working'/>
        </div>
    </div>
  )
}

export default Body