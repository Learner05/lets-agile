import React from 'react';
import ReactDOM from 'react-dom';
import TopNavbar from './Navbar.jsx';
import BoardSummary from './BoardSummary.jsx';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


var Boards = [{
  BoardName : "Sample 1",
  BoardDesc : "This is a Sample Board 1",
  Result : "Completed"
},
{
  BoardName : "Sample 2",
  BoardDesc : "This is a Sample Board 2",
  Result : "In Progress"
},
{
  BoardName : "Sample 3",
  BoardDesc : "This is a Sample Board 3",
  Result : "Completed"
}
];




class Retro extends React.Component {

  render(){

    var rows = [];

    Boards.forEach(function(board, idx) {
      rows.push(<BoardSummary key={idx} name = {board.BoardName} desc = {board.BoardDesc} result = {board.Result} />)
    });

    return(
      <div>
        <div>
          <h3>Retrospective Boards</h3>
          <hr></hr>
          <p>The team meets regularly, usually adhering to the rhythm of its
            iterations, to explicitly reflect on the most significant events to
            have occurred since the previous such meeting, and take decisions
            aiming at remediation or improvement.</p>
          <div className="row topmargin">
            <div className="col-xs-12 col-sm-6">
              <div className="row">
                  <div className="col-sm-12 headr">
                    <span>Board Created By me</span>
                    <Link to="/CreateBoard"><i className="fa fa-plus-square-o addicon"></i></Link>
                  </div>
                  <div className="col-sm-12 boardnote">
                    {(rows.length > 0) ? rows : <p>No Board Created by You</p>}

                  </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="row">
                  <div className="col-sm-12 headr lftmargin">
                    <span>Board I am Member of</span>
                    <span className="oi oi-plus"></span>
                  </div>
                  <div className="col-sm-12 boardnote lftmargin">
                    {(rows.length === 0) ? rows : <p> you are not invited to any Group</p>}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Retro;
