import React from 'react';
import BoardDef from './BoardDef.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


var boardTypes = [
  {
    name : "Sample 1",
    desc : "This is a Sample Board 1",
    img  : "../../images/icon1.png"
  },
  {
    name : "Sample 2",
    desc : "This is a Sample Board 2",
    img  : "../../images/icon1.png"
  },
  {
    name : "Sample 3",
    desc : "This is a Sample Board 3",
    img  : "../../images/icon1.png"
  },
  {
    name : "Sample 4",
    desc : "This is a Sample Board 4",
    img  : "../../images/icon1.png"
  }
];

class CreateBoard extends React.Component {

    constructor (props){
      super(props);

      this.createBoardHandle = this.createBoardHandle.bind(this);
    }


    createBoardHandle() {
      this.props.history.push("/retroboard");
    }


    render(){
      var odd = [];
      var even = [];

      boardTypes.forEach(function(board, idx) {

        if (idx% 2 === 0){
          even.push(<BoardDef name = {board.name} desc = {board.desc} img = {board.img} />)
        } else {
          odd.push(<BoardDef name = {board.name} desc = {board.desc} img = {board.img} />)
        }
      });

      return(
        <div className="container">
          <div className="card container topmargin">
            <div className="row">
                <div className = "col-xs-12 col-sm-6">
                  <div onClick={this.createBoardHandle}>
                    {even}
                  </div>
                </div>
                <div className = "col-xs-12 col-sm-6">
                  <div onClick="">
                    {odd}
                  </div>
                </div>
          </div>
        </div>
      </div>
      )
    }
}

export default CreateBoard;
