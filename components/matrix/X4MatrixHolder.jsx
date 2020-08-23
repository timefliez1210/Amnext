import React, { useState, useEffect } from "react";
import Spinner from "../Spinner.jsx";
import X4Matrix from "./X4matrix";

const X4MatrixHolder = (props) => {
  const [reload, setReload] = useState(0);
  useEffect(() => {
    if (props.struc != undefined) {
      setReload(1);
    }
  }, reload);

  if (props.struc === undefined) {
    return (
      <div className="upper-holder">
        <div className="top-part">
          <h1>Forsage x4</h1>
        </div>
        <div className="bottom-part">
          <Spinner />
        </div>
        <p>Hallo ich bin der Lückenfüller Text für die Icones</p>
        <style jsx>{`
          .upper-holder {
            margin-bottom: 20px;
            text-align: left;
          }
          .top-part {
            width: 100%;
            background: rgba(28, 22, 85, 1);
            border-radius: 20px 20px 0 0;
            padding: 10px 10px;
          }
          .bottom-part {
            width: 100%;
            background: rgba(28, 22, 85, 1);
            border-radius: 0 0 20px 20px;
            padding: 10px 10px;
            border-top: 2px solid black;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 30px;
          }
        `}</style>
      </div>
    );
  } else {
    return (
      <>
        <div className="upper-holder">
          <div className="top-part">
            <h1>Forsage x4</h1>
          </div>
          <div className="bottom-part">
            {props.struc.map((matrix, index) => (
              <X4Matrix
                id={matrix.id}
                key={matrix.key}
                cost={matrix.cost}
                bought={matrix.userX4Exist}
                structure={matrix.userX6}
                account={props.account}
              />
            ))}
          </div>
          <p>Hallo ich bin der Lückenfüller. Text für die Icones</p>
        </div>
        <style jsx>{`
          .upper-holder {
            margin-bottom: 20px;
            text-align: left;
          }
          .top-part {
            width: 100%;
            background: rgba(28, 22, 85, 1);
            border-radius: 20px 20px 0 0;
            padding: 10px 20px;
          }
          .bottom-part {
            width: 100%;
            background: rgba(28, 22, 85, 1);
            border-radius: 0 0 20px 20px;
            padding: 10px 10px;
            border-top: 2px solid black;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 30px;
          }
        `}</style>
      </>
    );
  }
};
export default X4MatrixHolder;
