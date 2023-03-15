import './shortener.scss';
import React, { useState } from 'react';
import Axios from 'axios';

function Shortener() {

    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    const [shortUrl, setShortUrl] = useState('');
    const [button, setButton] = useState(false);


    const handleSubmit = () => {
        if (url.length === 0) {
            setError(true);
            setShow(false);
        }
        else {
            setShow(true);
            const getShortUrl = () => {
                Axios.get('https://api.shrtco.de/v2/shorten?url=' + url).then((response, error) => {
                    console.log(response);
                    if (error) {
                        setError(true);
                        setShow(false);
                    };
                    setShortUrl(response.data.result.full_short_link)
                })
            }
            getShortUrl();
        }
        setButton(false);
    }

    const handleButton = () => {
        setButton(true);
        navigator.clipboard.writeText(shortUrl);
    }

    return (
        <div className='shortener'>
            <div className='inputBox'>
                <div className='left'>
                    <input type='text' placeholder={error ? 'Please add a valid link' : 'Shorten a link here...'} className={error ? 'errorclass' : 'linkInput'} onChange={(e) => { setUrl(e.target.value) }} />
                </div>
                <div className='right'>
                    <button onClick={handleSubmit}>Shorten It!</button>
                </div>
            </div>
            {
                show &&
                <div className='output'>
                    <div className='outputBox'>
                        <div className='originalLink'>
                            <p>{url}</p>
                        </div>
                        <div className='shortLink'>
                            <p>{shortUrl}</p>
                            <button onClick={handleButton} className={!button ? '' : 'copied-btn'}>{!button ? 'Copy' : 'Copied!'}</button>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Shortener