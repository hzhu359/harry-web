import React from 'react'
import { data } from "../constants/data";
import SplitText from './SplitText';

function Blurb() {
    return (
        <div>
            <p>
            i'm currently a student at georgia tech (go jackets!) studying computer science.
            here's my <a href={data.linkResume}>resumé</a>.
            </p>
            <p>
                my interests are computer science theory (think algorithms and such),
                machine learning,
                <small>trying</small> to run,
                powerlifting,
                classical music (my favorite <a href={data.linkProko}>piece</a>!),
                cooking,
                {/* playing <a href={data.linkQuizBowl}>quizbowl</a> occasionally and reading jeopardy questions, */}
                and learning in general.
            </p>
            <p>
                i'm currently a teaching assistant for cs1332 (data structures & algorithms),
                a former software engineering intern at 
                <SplitText text='microsoft' colorSequence={['#F25022', '#7FBA00', '#00A4EF', '#FFB900']}></SplitText>
                under azure dedicated (summer '21),
                and an incoming software engineering intern at 
                <SplitText text='facebook' colorSequence={['#1778F2']}></SplitText> (summer '22).
            </p>
        </div>
    )
}

export default Blurb