import React, { useState } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

// stupid pic import section
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import harry from '../images/harry.jpg'

const picArray = [pic1, pic2, pic3, harry];

// returns pseudorandom index from n choices
// should be prefixed w/ 'pic' and suffixed with '.jpg'
function randomChoice(n, curr, blind) {
    if (n <= 0) {
        return 'NULL'
    }
    if (n === 1) {
        return curr;
    }
    let random = Math.floor(Math.random() * n);
    if (blind) {
        return random;
    }
    else {
        if (random === curr) {
            return randomChoice(n, curr, blind);
        }
        return random;
    }
}

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//  }


// pass in the number of pics in images folder
function FunTitle() {
    const [photoDex, setPhotoDex] = useState(randomChoice(picArray.length, null, true));
    // let imgSrc = require('../images/' + imageName);
    let random = randomChoice(picArray.length, photoDex, true)
    console.log(photoDex)
    return (
        <ReactCSSTransitionReplace transitionName='cross-fade' transitionEnterTimeout={100} transitionLeaveTimeout={100}>
            <img className='harrypic' key={photoDex} src={picArray[photoDex]} alt='my pic' onClick={() => setPhotoDex(randomChoice(picArray.length, photoDex, false))}/>
        </ReactCSSTransitionReplace>
    )
}

export default FunTitle