import React, { useState } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import pic from '../images/profile-picture.jpeg'
import pic1 from '../images/pic1.jpg'

// pass in the number of pics in images folder
function Capy() {
    const [capy, setCapy] = useState(0);

    return (
        <div onMouseEnter={() => setCapy(true)} onMouseLeave={() => setCapy(false)}>
            <ReactCSSTransitionReplace transitionName='cross-fade' transitionEnterTimeout={100} transitionLeaveTimeout={100}>
                <img className='harrypic' key={capy} src={capy ? pic1 : pic} alt='my pic'/>
            </ReactCSSTransitionReplace>
        </div>
    )
}

export default Capy