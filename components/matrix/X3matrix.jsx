const X3matrix = (props) => {
  return (
    <>
      <div classname="holder">
        <div className="matrix-head">
          <div className="level">{props.id}</div>
          <div className="id">{props.cost}</div>
        </div>
        <div className="items">
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
        <div className="downlines">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
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
          grid-gap: 43px;
        }
        .lines {
          height: 25px;
          width: 2px;
          background: lightblue;
          margin: auto auto;
        }
        .downlines {
          display: grid;
          grid-template-columns: 30px 30px 30px;
          grid-gap: 43px;
        }
        .circle {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          border: 1.5px solid #1ea6ff;
          background: #1ea6ff;
        }
      `}</style>
    </>
  );
};

export default X3matrix;
