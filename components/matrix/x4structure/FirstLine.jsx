import CircleBlue from "./CircleBlue";
const FirstLine = (props) => {
  return (
    <>
      <div className="items">
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="downlines">
        <CircleBlue exist={props.exist1} />
        <CircleBlue exist={props.exist2} />
      </div>
      <div className="items">
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <style jsx>{`
        .lines {
          height: 25px;
          width: 2px;
          background: lightblue;
          margin: auto auto;
        }
        .items {
          display: grid;
          grid-template-columns: 100px 100px;
          text-align: center;
          align-items: center;
        }
        .downlines {
          display: grid;
          grid-template-columns: 100px 100px;
        }
      `}</style>
    </>
  );
};

export default FirstLine;
