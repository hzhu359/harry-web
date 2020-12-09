import React from 'react'
import { Divider, Grid } from "@material-ui/core";
import {data} from '../constants/data.js'
import pic from '../images/harry.jpg'
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function MainGrid() {
    return (
        <Grid className='grid' container spacing={3} direction='row' justify='space-evenly'>
            <Grid item xs = {12} className='header'>
                <div>
                    howdy! i'm harrison
                </div>
            </Grid>
            <Grid container item xs={12} spacing={3} className='twocol'>
                <Grid container item xs={4} spacing = {3} className='picsocialcol' direction='col'>
                    <Grid className='picContainer' container item spacing={3} direction='row' justify='center'>
                        <Grid item>
                            <img src={pic} alt='harrypic' className='harrypic'/>
                        </Grid>
                    </Grid>
                    <Grid className='socialGrid' container item spacing={3} justify='space-evenly'>
                        <Grid item>
                            <IconButton href={data.linkGitHub}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton href={data.linkInstagram}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton href={data.linkLinkedIn}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs = {1} direction='row' justify='center'>
                    <Divider className='divider' flexItem orientation="vertical" />
                    <Divider className='divider' flexItem orientation="vertical" />
                </Grid>
                <Grid item xs={7} className='desccol'>
                    <p>
                    i'm currently a student at georgia tech (go jackets!) studying computer science.
                    here's my <a href={data.linkResume}>resumé</a>.
                    </p>
                    <p>
                        my interests are machine learning,
                        <small>trying</small> to run,
                        classical music (my favorite <a href={data.linkProko}>piece</a>!),
                        playing <a href={data.linkQuizBowl}>quizbowl</a> occasionally,
                        and learning in general.
                    </p>
                    <p>
                        i'm currently a teaching assistant for cs1332 (data structures & algorithms)
                        and an incoming software engineering intern at microsoft for summer 2021.
                    </p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainGrid