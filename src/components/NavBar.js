import React from 'react'
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import { NavLink as Link } from "react-router-dom";

function NavBar() {
    return (
        <Grid container itemspacing={3} direction='row'>
            <Grid container item xs={4} justify='center'>
                <div className='header'>
                    howdy! i'm harrison
                </div>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid container item spacing={3} xs={4} justify='space-between'>
                <Grid container item xs={1} justify='center'>
                    <Link to='/about'>about</Link>
                </Grid>
                <Grid container item xs={1} justify='center'>
                    <Link to='/pogchamp'>resume</Link>
                </Grid>
                <Grid container item xs={1} justify='center'>
                    <Link to='/fun'>fun</Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavBar