import React, { Component } from 'react';
import GameofLifeButtons from '../Buttons/Buttons';
import {Header1, Body1} from '../Text/Text';
import Grid from '../Grid/Grid';

import '../../index.css';

  class  Main extends Component {
      constructor(){
          super();
          this.speed = 150;
          this.rows = 50;
          this.cols = 50;
          this.playState = false;
          this.random = false;
          this.state = {
              gen: 0,
              fillGrid: Array(this.rows).fill().map(() => Array(this.col).fill(false))
          }
      }

      selectCell = (row, col) => {
          if(this.playState !== true ){
              let copyGrid = arrayClone(this.state.fillGrid);
              copyGrid[row][col] = !copyGrid[row][col]
              this.setState({
                  fillGrid: copyGrid
              });
          }
      }

      random = () => {
          if (this.playState !== true){
              let copyGrid = arrayClone(this.state.fillGrid);
              for(let i = 0; i < this.rows; i++){
                  for(let j = 0; j < this.cols; j++){
                      if (Math.floor(Math.random() * 4 === 1)) {
                          copyGrid[i][j] = true
                      }
                  }
              }
              this.setState({
                  fillGrid: copyGrid
              })
          }
      }

      playButton = () => {
          this.playState = true;
          clearInterval(this.intervalId);
          this.intervalId = setInterval(this.play, this.speed);
      }

      pauseButton = () => {
          this.playState = false;
          clearInterval(this.intervalId);
      }

      decreaseSpeed = () => {
          this.speed -= 10
      }

      increaseSpeed = () => {
          this.speed += 10
      }

      clear = () => {
          var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
          this.setState({
              fillGrid: grid,
              generation: 0
          });
      }

      play = () => {
          let x = this.state.fillGrid;
          let x2 = arrayClone(this.state.fillGrid);
        
          for (let i = 0; i < this.rows; i++){
              for (let j = 0; j <this.cols; j++){
                  let count = 0           
                  if (i > 0) if (x[i - 1][j]) count++;
                  if (i > 0 && j > 0) if(x[i - 1][j + 1]) count ++;
                  if (i > 0 && j < this.cols - 1) if (x[i - 1][j + 1]) count++;
                  if (j < this.cols - 1) if (x[i][j + 1]) count++;
                  if (j > 0) if (x[i][j - 1]) count++;
                  if (i < this.rows - 1) if (x[i + 1][j]) count++;
                  if (i < this.rows - 1 && j > 0) if (x[i + 1][j - 1]) count++;
                  if (i < this.rows - 1 && j < this.cols - 1) if (x[i + 1][j + 1]) count++;
                  if (x[i][j] && (count < 2 || count > 3)) x2[i][j] = false;
                  if (!x[i][j] && count === 3) x2[i][j] = true;
            }
          }
          this.setState({
            gridFull: x2,
            generation: this.state.generation + 1
          });
      }

      render() {
          return (
              <>
                <Header1 />
                <GameofLifeButtons />
                <Grid fillGrid = {this.state.fillGrid}
                rows = {this.rows}
                cols = {this.cols}
                selectCell = {this.selectCell}
                />
                <Body1/>
              </>
          );
      }
  }

  function arrayClone(arr) {
      return JSON.parse(JSON.stringify(arr))
  }

  export default Main;