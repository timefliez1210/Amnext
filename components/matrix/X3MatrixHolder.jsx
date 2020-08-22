import X3Matrix from "./X3matrix";
import React, { useState, useEffect } from "react";

const X3MatrixHolder = (props) => {
  const [reload, setReload] = useState(0);
  useEffect(() => {
    if (props.struc != undefined) {
      setReload(1);
    }
  }, reload);

  if (props.struc === undefined) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <div className="upper-holder">
          <div className="top-part">
            <h1>Forsage x3</h1>
          </div>
          <div className="bottom-part">
            {props.struc.map((matrix, index) => (
              <X3Matrix
                id={matrix.id}
                key={matrix.key}
                cost={matrix.cost}
                active={matrix.number}
              />
            ))}
          </div>

          <p>Hallo ich bin der Lückenfüller Text für die Icones</p>
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
            padding: 10px 20px;
            border-top: 2px solid black;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            grid-gap: 50px;
          }
        `}</style>
      </>
    );
  }
};
export default X3MatrixHolder;
