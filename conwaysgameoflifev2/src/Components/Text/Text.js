import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'uppercase'
    }
})

class Header extends Component {
    render() {
        const { classes } = this.props
        return(
           <>
            <Typography color="primary" className = {classes.root} variant = 'h1'>
                Conway's Game of Life
            </Typography>
            <Typography className = {classes.root} variant = 'h2'>
                Ryan Plante
            </Typography>
           </>
        )
    } 
}

const Header1 = withStyles(useStyles)(Header)

class Body extends Component {
    render() {
        const { classes } = this.props
        return(
            <Typography className = {classes.root} variant = 'h3'>
                This is a Test
            </Typography>
        )
    }
}

const Body1 = withStyles(useStyles)(Body)

export { Header1, Body1 } 