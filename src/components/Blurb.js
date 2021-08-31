import React from 'react'
import { data } from "../constants/data";

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
                playing <a href={data.linkQuizBowl}>quizbowl</a> occasionally and reading jeopardy questions,
                and learning in general.
            </p>
            <p>
                i'm currently a teaching assistant for cs1332 (data structures & algorithms)
                and an incoming software engineering intern at microsoft for summer 2021.
            </p>
        </div>
    )
}

export default Blurb