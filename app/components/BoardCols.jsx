import React from 'react';
import Ticket from './ticket.jsx';



class BoardCol extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        newTicket : [{
            colName : "",
            tickets : {
              name : "prankul"
            }
        }]
      }

      this.addTicket = this.addTicket.bind(this);
    }

    addTicket() {
      console.log("value of column:" + this.props.name);
      this.props.onAddTicket(this.props.name)
    }


    render(){
      /*  var rows=[];
        this.props.BoardCol.tickets.forEach(function(ticket, idx){
          rows.push(<Ticket />)
        })*/
        var rows = [];
        this.props.tickets.forEach(function(ticket, idx){
          rows.push(<Ticket key={idx} name={ticket.name} />)
        });

        return(
            <div className={this.props.colNum}>
              {console.log(this.props.onAddTicket)}
              <div className="headr">
               <span>{this.props.name}</span>
               <i className="fa fa-plus-square-o addicon"
                 onClick={this.addTicket} ></i>
              </div>
              <div className="phse">
                  {rows}
              </div>
            </div>
        )
  }
}


export default BoardCol;
