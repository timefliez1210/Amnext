import FirstLine from "./x4structure/FirstLine";
import SecondLine from "./x4structure/SecondLine";

const X4matrix = (props) => {
  return (
    <>
      <div className="holder">
        <div className="matrix-head">
          <div className="level">{props.id}</div>
          <div className="id">{props.cost}</div>
        </div>
        <FirstLine />
        <div className="squares">
          <div className="struc"></div>
          <div className="struc"></div>
        </div>
        <SecondLine />
      </div>
      <style jsx>{`
        .holder {
          width: auto;
          width: 200px;
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
          height: 70px;
          overflow: hidden;
        }
        .level {
          background: #338eff;
          padding: 20px 20px;
          border-radius: 20px;
        }
        .id {
          padding: 20px 20px;
        }
        .squares {
          display: grid;
          grid-template-columns: 100px 100px;
        }
        .struc {
          height: 2px;
          width: 50%;
          background: lightblue;
          margin: auto auto;
        }
      `}</style>
    </>
  );
};

export default X4matrix;
