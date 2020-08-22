import Circle from "./Circle";

const X3matrix = (props) => {
  if (props.bought) {
    if (props.active === 0) {
      return (
        <>
          <div className="holder">
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
              <Circle exist={false} />
              <Circle exist={false} />
              <Circle exist={false} />
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
              height: 70px;
              overflow: hidden;
              cursor: pointer;
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
          `}</style>
        </>
      );
    } else if (props.active === 1) {
      return (
        <>
          <div className="holder">
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
              <Circle exist={true} />
              <Circle exist={false} />
              <Circle exist={false} />
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
              height: 70px;
              overflow: hidden;
              cursor: pointer;
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
          `}</style>
        </>
      );
    } else if (props.active === 2) {
      return (
        <>
          <div className="holder">
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
              <Circle exist={true} />
              <Circle exist={true} />
              <Circle exist={false} />
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
              height: 70px;
              overflow: hidden;
              cursor: pointer;
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
          `}</style>
        </>
      );
    } else {
      return (
        <>
          <div className="holder">
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
              <Circle exist={true} />
              <Circle exist={true} />
              <Circle exist={true} />
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
              height: 70px;
              overflow: hidden;
              cursor: pointer;
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
          `}</style>
        </>
      );
    }
  } else {
    return (
      <>
        <div className="holder">
          <button
            className="buy-level"
            onClick={() => {
              console.log(props.cost);
            }}
          >
            Buy
          </button>
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
            <Circle exist={false} />
            <Circle exist={false} />
            <Circle exist={false} />
          </div>
        </div>
        <style jsx>{`
          .buy-level {
            border: none;
            background: red;
            color: white;
            font-size: 1.2em;
            position: relative;
            right: 0px;
            z-index: 100000000;
          }
          .holder {
            width: auto;
            width: 200px;
          }
          .matrix-head {
            background: rgba(16, 1, 62, 1);
            display: grid;
            grid-template-columns: 50px 150px;
            border-radius: 20px;
            font-style: bold;
            font-size: 1.2em;
            height: 70px;
            overflow: hidden;
            cursor: pointer;
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
        `}</style>
      </>
    );
  }
};

export default X3matrix;
