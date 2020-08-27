import React, { useContext } from "react";
import AccountContext from "../../Layout/AccountContext";
import CircleX3 from "./x3structure/CircleX3";

const X3MatrixHolderDetail = (props) => {
  const { matrixView, setMatrixView } = useContext(AccountContext);
  const { detailAccountView, setDetailAccountView } = useContext(
    AccountContext
  );
  return (
    <div>
      <div className="sildes">
        <div className="holder">
          <div
            className="matrix-head"
            onClick={() => {
              setMatrixView("");
            }}
          >
            <div className="level">{props.id}</div>
            <div className="id">{props.cost}</div>
          </div>
          <div className="items">
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>
          <div className="downlines">
            <CircleX3 exist={false} />
            <CircleX3 exist={false} />
            <CircleX3 exist={false} />
          </div>
        </div>
        <style jsx>{`
          .holder {
            width: 80%;
            max-width: 400px;
            margin: auto auto;
          }
          .matrix-head {
            background: rgb(31, 169, 255);
            background: linear-gradient(
              270deg,
              rgba(31, 169, 255, 1) 31%,
              rgba(21, 117, 251, 1) 77%
            );
            display: grid;
            grid-template-columns: 50px 150px;
            border-radius: 20px;
            font-style: bold;
            font-size: 1.2em;
            height: 140px;
            overflow: hidden;
            cursor: pointer;
            width: 80%;
            max-width: 400px;
            margin: auto auto;
          }
          .level {
            background: #338eff;
            padding: 20px 20px;
            border-radius: 20px;
          }
          .id {
            padding: 20px 20px;
          }
          .items {
            display: grid;
            grid-template-columns: 30px 30px 30px;
            grid-gap: 90px;
            margin: auto auto;
            width: 65%;
            max-width: 400px;
          }
          .lines {
            height: 40px;
            width: 3px;
            background: lightblue;
            margin: auto auto;
          }
          .downlines {
            display: grid;
            grid-template-columns: 30px 30px 30px;
            grid-gap: 90px;
            margin: auto auto;
            width: 65%;
            max-width: 400px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default X3MatrixHolderDetail;
