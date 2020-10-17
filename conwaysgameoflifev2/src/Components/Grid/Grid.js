import React, { Component } from 'react';

class Box extends Component {
    selectCell = () => {
      this.props.selectCell(this.props.row, this.props.col)
    }
    render () {
      return (
        <div 
          className={this.props.cellClass}
          id={this.props.id}
          onClick={this.selectCell}
        />
      )
    }
  }



  class Grid extends React.Component {
    render() {      
      const width = this.props.cols * 16
      var rowsArr = []
      var cellClass = "";

      for (var i = 0; i < this.props.rows; i++) {

        for (var j = 0; j < this.props.cols; j++) {
          let boxId = i + "_" + j;

          cellClass = this.props.fillGrid[i][j] ? "cell on" : "cell off"


          rowsArr.push(
            <Box 
              cellClass={cellClass}
              key={boxId}
              boxId={boxId}
              row={i}
              col={j}
              selectCell={this.props.selectCell}
            />
          );
        }
      }

      return (
        <div className="grid" style={{width: width}}>
          {rowsArr}
        </div>
      );
    }
  }

  export default Grid;