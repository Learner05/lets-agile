import React from 'react';
import Ticket from './ticket.jsx';



class BoardCol extends React.Component {

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

    handleaddTicket() {

    }


    render(){

        this.state.tickets.forEach(function(ticket, idx){



        })


        return(
            <div className={this.props.colNum}>
              <div className="headr">
               <span>{this.props.name}</span>
               <i className="fa fa-plus-square-o addicon" onClick={this.handleaddTicket}></i>
              </div>
              <div className="phse">
                <Ticket />
              </div>
            </div>
        )
  }
}


export default BoardCol;
