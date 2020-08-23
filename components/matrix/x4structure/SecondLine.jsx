import CircleBlue from "./CircleBlue";
const SecondLine = (props) => {
  return (
    <>
      <div className="items4">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="downlines4">
        <CircleBlue exist={props.exist3} />
        <CircleBlue exist={props.exist4} />
        <CircleBlue exist={props.exist5} />
        <CircleBlue exist={props.exist6} />
      </div>
      <style jsx>{`
        .lines {
          height: 25px;
          width: 2px;
          background: lightblue;
          margin: auto auto;
        }
        .items4 {
          display: grid;
          grid-template-columns: 50px 50px 50px 50px;
        }
        .downlines4 {
          display: grid;
          grid-template-columns: 50px 50px 50px 50px;
        }
      `}</style>
    </>
  );
};

export default SecondLine;
