const X3matrix = (props) => {
  return (
    <>
      <div classname="holder">
        <div className="matrix-head">
          <div className="level">{props.id}</div>
          <div className="id">{props.cost}</div>
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
          background: black;
          display: grid;
          grid-template-columns: 50px 150px;
          border-radius: 20px;
        }
        .level {
          background: lightblue;
          padding: 20px 20px;
          border-radius: 20px;
        }
        .id {
          padding: 20px 20px;
        }
        .downlines {
          padding: 30px 0;
          display: grid;
          grid-template-columns: 30px 30px 30px;
          grid-gap: 43px;
        }
        .circle {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: lightblue;
        }
      `}</style>
    </>
  );
};

export default X3matrix;
