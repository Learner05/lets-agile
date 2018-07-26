import React from 'react';



const BoardDef = (props) => {
    return(
        <div className = "row boardlbl">
            <div className="col-sm-4">
                <img className="img-fluid"  src={require('../../images/icon1.png')}
              style={{"width": "150px", "height": "150px"} }alt="Card image cap"></img>
            </div>
            <div className="col-sm-8">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}

export default BoardDef;
