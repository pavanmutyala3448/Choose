import React from "react";
import "./componentStyle/flex.css";
const FlexBox = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3  choose-info">
          <h1 className="choose-index">1</h1>
          <div className="info">
            <h4 className="info-head">Hit the ground running.</h4>
            <p className="info-txt">
              We find out about your message, objective, strategy, and brand.
            </p>
          </div>
        </div>
        <div className="col-md-3 choose-info">
          <h1 className="choose-index">2</h1>
          <div className="info">
            <h4 className="info-head">Only the best in your corner.</h4>
            <p className="info-txt">
              We find out about your message, objective, strategy, and brand.
            </p>
          </div>
        </div>
        <div className="col-md-3 choose-info">
          <h1 className="choose-index">3</h1>
          <div className="info">
            <h4 className="info-head">Overdelivering is our benchmark.</h4>
            <p className="info-txt">
              We find out about your message, objective, strategy, and brand.
            </p>
          </div>
        </div>
        <div className="col-md-3 choose-info">
          <h1 className="choose-index">4</h1>
          <div className="info">
            <h4 className="info-head">Driven by ROI, not egos.</h4>
            <p className="info-txt">
              We find out about your message, objective, strategy, and brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlexBox;
