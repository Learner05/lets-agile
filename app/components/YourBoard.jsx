import React from 'react';
import BoardCol from './BoardCols.jsx';

//var cols = ["Start", "Stop", "continue"];

class yourBoard extends React.Component {

      constructor(props){
          super(props)
          this.state = {
            BoardCol : [{
                colName : "start",
                tickets : [{
                  name : "prankul"
                },
                {
                  name : "anjali"
                }
              ]
              },
              {
                colName : "stop",
                tickets : [{
                  name : "pk"
                }]
              },
              {
                colName : "continue",
                tickets : [{
                  name : "AB"
                }]
              }
          ]
        }

         this.handleAddTicket=this.handleAddTicket.bind(this);
      };

    handleAddTicket(colDetails){

      let Board = [];
      let tempState = [];

          colDetails.forEach((newTicket, i) => {

            this.state.BoardCol.forEach((Ticket, j)=> {

              console.log("value of newTicket :" + newTicket.colName);
                console.log("value of old :" + Ticket.colName);
                console.log("value of old :" + Ticket.tickets.length);

                if(newTicket.colName === Ticket.colName ){
                  Ticket.tickets.push(newTicket.tickets)
                }

                console.log("value of old :" + Ticket.tickets.length);

                tempState.push(Ticket);
            })

    })

     this.setState({BoardCol: tempState});
}



    render(){
      var cols = this.state.BoardCol;
      var col = [];
      var cls = "";

      cols.forEach((boardcol, idx) => {

        {console.log(boardcol)}
        if (cols.length == '1'){
          cls = "col-sm-12"
        } else if (cols.length == '2'){
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
        col.push(<BoardCol name={boardcol.colName} tickets={boardcol.tickets}
          colNum= {cls} onAddTicket={this.handleAddTicket} />)
      })

      return(
        <div className="row">

              {col}
        </div>

      )
    }
}

export default yourBoard;
