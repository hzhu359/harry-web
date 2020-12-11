import React from 'react'
import { Grid, AppBar, Toolbar, Typography, Hidden } from "@material-ui/core";
import { NavLink as Link } from "react-router-dom";
import { routes } from '../constants/routes'

function NavBar() {
    let navArray = routes.filter((l) => l.display).map((l) => (
        <Grid container item justify='flex-end' xs={1}>
            <Link key={l.label} to={l.path}>{l.label}</Link>
        </Grid>)
        );
    let numNavs = navArray.length;
    let xs = 11;
    let md = 4;
    return (
        <Grid className='navBar' container itemspacing={3} direction='row'>
            <Grid container item md={md} justify='center'>
                <div className='header'>
                    howdy! i'm harrison
                </div>
            </Grid>
            <Hidden smDown>
                <Grid item xs={12 - numNavs - md}></Grid>
                <Grid className='navLink ' container item spacing={3} xs={numNavs} justify='space-between'>
                    {navArray}
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default NavBar