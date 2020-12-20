import React from 'react'
import { Grid, AppBar, Toolbar, Typography, Hidden } from "@material-ui/core";
import { NavLink as Link } from "react-router-dom";
import { routes } from '../constants/routes';
import FunTitle from './FunTitle';
import FunPhoto from './FunPhoto';
import { data } from '../constants/data'

function NavBar(props) {
    let navArray = routes.filter((l) => l.display).map((l) => (
        <Grid container item justify='flex-end' xs={1}>
            <Link key={l.label} to={l.path}>{l.label}</Link>
        </Grid>)
        );
    let numNavs = navArray.length;
    return (
        <Grid className='navBar' container itemspacing={3} direction='row'>
            <Grid container item xs={12} md={props.md} justify='center'>
                <div className='header'>
                    <FunTitle greetList={data.greetList} />
                    <span> i'm harrison</span>
                </div>
            </Grid>
            {/* <Hidden smDown>
                <Grid item xs={12 - numNavs - props.md}></Grid>
                <Grid className='navLink ' container item spacing={3} xs={numNavs} justify='space-between'>
                    {navArray}
                </Grid>
            </Hidden> */}
        </Grid>
    )
}

export default NavBar