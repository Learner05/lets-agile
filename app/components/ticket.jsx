import React from 'react';

const Ticket = (props) => {
  return(
    <div className="tkct">
      <div className="row">
        <div className="col-11 col-sm-11">

        </div>
        <div className="col-1 col-sm-1">
          <span aria-hidden="true" className="cls">&times;</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
            <textarea style={{"width": "100%"}}></textarea>
        </div>
      </div>
      <div className="row">
        <div className="offset-sm-7 offset-lg-9 col-12 col-sm-5 col-lg-3">
            <div className="divbtn" onClick={this.handle}>SAVE</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket;
