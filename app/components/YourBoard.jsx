import React from 'react';
import BoardCol from './BoardCols.jsx';

var cols = ["Start", "Stop", "continue"];

class yourBoard extends React.Component {

      constructor(props){
          super(props)
          this.state = {
            BoardCol : [{
              colName : ""
              tickets : [{
                name : "",
                noOfLikes : 0,
                createdBy : "",
                liked : false,
                isEditable : true
              }]
            }]
          }

          this.handleaddTicket = this.handleaddTicket.bind(this);
      }


    render(){
      var col = [];
      var cls = "";

      cols.forEach(function(boardcol, idx){

        if (cols.length == '2'){
          cls = "col-sm-6"
        } else if (cols.length == '3'){
          cls = "col-sm-4"
        } else if (cols.length == '4'){
          cls = "col-sm-3"
        } else if (cols.length == '5'){
          if (idx == "0" ) {
            cls = "offset-sm-1 col-sm-2"
          } else {
            cls = "col-sm-2"
          }
        }
        col.push(<BoardCol name={boardcol} colNum= {cls} />)
      })

      return(
        <div className="row">
              {col}
        </div>

      )
    }
}

export default yourBoard;
