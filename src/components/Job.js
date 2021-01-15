import React from "react";

const Job = (props) => {
  return (
    <div className={props.className}>
      <div>
        <h2 className="title">{props.title} </h2>
      </div>

      <div className="detail">
        <p className="contractType">{props.contractType}</p>
        <p className="country">{props.country}</p>
        <p className="city">{props.city}</p>
      </div>
    </div>
  );
};
export default Job;
