import './statistics.scss';
import IMG1 from '../../images/icon-brand-recognition.svg';
import IMG2 from '../../images/icon-detailed-records.svg';
import IMG3 from '../../images/icon-fully-customizable.svg';

function Statistics() {
    return (
        <div className='statistics'>
            <div className='description'>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='icon'>
                        <img className='recognition-img' src={IMG1} alt='recognition-img' />
                    </div>
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img className='records-img' src={IMG2} alt='records-img' />
                    </div>
                    <h2>Detailed Records</h2>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img className='customizable-img' src={IMG3} alt='customizable-img' />
                    </div>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics