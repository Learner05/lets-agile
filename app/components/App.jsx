import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Dashboard from './Dashboard.jsx';
import '../../styles/app.css';
import BoardDash from './CreateBoard.jsx';
import yourBoard from './yourBoard.jsx';

class App extends React.Component {
  render(){
    return(
      <Router>
          <div>
          <Navbar />
          <div className="container topmargin">
              <Route exact path="/" component={Dashboard} />
              <Route path="/CreateBoard" component = {BoardDash} />
              <Route path="/retroboard" component = {yourBoard} />
          </div>
        </div>
     </Router>
    )
  }
}

export default App;
