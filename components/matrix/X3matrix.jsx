import Circle from "./Circle";
import { loadWeb3 } from "../../utils/utility";
import { ABI, ADDRESS } from "../../utils/globals";
import Web3 from "web3";

const X3matrix = (props) => {
  const cost = props.cost;
  const id = props.id;
  const buyLevel = async (_id, _level, _cost, _account) => {
    try {
      await loadWeb3();
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(ABI, ADDRESS);

      await contract.methods
        .buyNewLevel(_id, _level)
        .send({
          value: _cost,
          from: _account,
        })
        .then(function (receipt) {
          window.alert("Succes!");
        });
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }

    // type: "uint8", name: "matrix", internalType: "uint8"
    // await this.state.contract.methods
    //     .registrationExt(_refererAddress)
    //     .send({
    //       value: this.state.cost,
    //       from: this.state.account,
    //     })
    //     .then(function (receipt) {
    //       Router.push("/dashboard");
    //       this.setState({ loading: false });
    //     });
  };
  console.log(props.account);
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
          <div className="matrix-head">
            <div className="level">{props.id}</div>
            <button
              className="buy-level"
              onClick={async () => {
                await buyLevel(1, id, cost, props.account);
              }}
            >
              Buy for {props.cost}
            </button>
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
            background: none;
            color: white;
            font-size: 1em;
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
