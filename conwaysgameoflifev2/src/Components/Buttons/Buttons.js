import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Main from '../Main/Main'


  const useStyles = theme => ({
  root: {
      marginTop: '2%',
      display: 'flex',
      justifyContent: 'space-around',
    },
  });

class GameofLifeButtons extends Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <Button style={{
        color:'#000',
        backgroundColor: "#C1E2BE",}}
        variant = "contained">
        Play
      </Button>
      {/* <Button style={{
        color:'#000',
        backgroundColor: "#FFFDD0",}}
        variant = "contained">
        Pause
      </Button> */}
      <Button variant = "contained" color = "secondary">
        Clear
      </Button>

      <Button style={{
        color:'#000',
        backgroundColor: "#C09BF3",}}
        variant = "contained">
        Lower Speed
      </Button>

      <Button style={{
        color:'#000',
        backgroundColor: "#CB7A77",}}
        variant = "contained">
        Increase Speed
      </Button>

      <Button variant = "contained">
        Decrease Grid
      </Button>

      <Button variant = "contained">
        Increase Grid
      </Button>

      <Button style={{
        color:'#000',
        backgroundColor: "#CB7A77",}}
        variant = "contained">
        Next
      </Button>
    </div>

  )}}

  export default withStyles(useStyles)(GameofLifeButtons)
