import React, { useState } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

function randomChoice(arr, curr, blind) {
    let n = arr.length;
    if (n <= 0) {
        return 'NULL'
    }
    if (n === 1) {
        return arr[0];
    }
    let random = Math.floor(Math.random() * n);
    if (blind) {
        return arr[random];
    }
    else {
        if (arr[random] === curr) {
            return randomChoice(arr, curr, blind);
        }
        return arr[random];
    }
}

// function randomChoice(arr, curr, blind) {
//     let n = arr.length;
//     let random = Math.floor(Math.random() * n);
//     return arr[random]
// }

function FunTitle(props) {
    const [greetList, ] = useState(props.greetList);
    const [greet, setGreet] = useState(randomChoice(greetList, null, true));

    return (
        <div>
            <ReactCSSTransitionReplace transitionName='cross-fade'>
                <span key={greet} className='helloText' onClick={() => setGreet(randomChoice(greetList, greet, false))}>
                    {greet}!
                </span>
            </ReactCSSTransitionReplace>
        </div>
    )
}

export default FunTitle