import React from 'react'
import { Divider, Grid, Hidden} from "@material-ui/core";
import {data} from '../constants/data.js'
// import pic from '../images/harry.jpg'
import SocialIcon from './SocialIcon'
import Blurb from './Blurb'
import Fun from './Fun'
import NavBar from './NavBar'
import FunPhoto from './FunPhoto'
import Capy from './Capy.js';
import pic from '../images/profile-picture.jpeg'
import { Route, Switch} from 'react-router-dom';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function MainGrid() {
    return (
        <Grid className='grid' container spacing={3} direction='row' justify='center'>
            <Grid item xs = {12} className='header'>
                {/* md should match picsocialcol md */}
                <NavBar md = {4}/>
            </Grid>
            <Grid container item xs={12} spacing={3} className='twocol'>
                <Grid container item xs={12} md={4} spacing = {3} className='picsocialcol' direction='column'>
                    <Grid className='picContainer' container item spacing={3} direction='row' justify='center'>
                        <Grid item>
                            <img src={pic} alt='harrypic' className='harrypic'/>
                            {/* < FunPhoto /> */}
                        </Grid>
                    </Grid>
                    <Grid className='socialGrid' container item spacing={3} justify='space-evenly'>
                        <SocialIcon link={data.linkGitHub} faIcon={faGithub}/>
                        <SocialIcon link={data.linkLinkedIn} faIcon={faLinkedin}/>
                        <SocialIcon link={data.linkInstagram} faIcon={faInstagram}/>
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid container item xs = {1} direction='row' justify='center'>
                        <Divider className='divider' flexItem orientation="vertical" />
                        <Divider className='divider' flexItem orientation="vertical" />
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={7} className='desccol'>
                    <Switch>
                        <Route exact path='/' component={Blurb}/>
                        <Route exact path='/about' component={Blurb}/>
                        <Route exact path='/fun' component={Fun}/>
                        <Route render={() =>
                        <div>
                            <h1>404 babey!</h1>
                            <div>click a link to get back</div>
                        </div>
                        } />
                    </Switch>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainGrid