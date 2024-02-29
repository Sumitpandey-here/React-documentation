import React from 'react'
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='row bg-secondary'>

                <div className='col-6 text-center h5'>
                    @2024.All Rights Reserved.
                </div>

                <div className='col-6'>
                    <div className='d-flex foot'>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faYoutube} />
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
