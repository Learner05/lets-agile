import React from 'react';

const BoardSummary = (props) => {
  return(
    <div>
      <div className="note">
        <div className="noteIcon">
          <span>{props.name}</span><span className="badge badge-light" style={{"marginLeft":"10px"}}>{props.result}</span>
          <i className="fa fa-ellipsis-h addicon" aria-hidden="true"></i>
        </div>
        <div className="noteDesc">
            <p>{props.desc}</p>
            <span></span>
        </div>

      </div>
</div>
  )
}


export default BoardSummary;
