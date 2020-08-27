import { loadWeb3 } from "../../utils/utility";
import { ABI, ADDRESS } from "../../utils/globals";
import Web3 from "web3";
import AccountContext from "../../Layout/AccountContext";
import React, { useContext, useState, useEffect } from "react";
import ReferalLine from "./x3structure/ReferalLine";

const X3matrix = (props) => {
  const [exist1, setExist1] = useState(false);
  const [exist2, setExist2] = useState(false);

  const [downline1, setDownline1] = useState();
  const { matrixView, setMatrixView } = useContext(AccountContext);
  const { detailAccountView, setDetailAccountView } = useContext(
    AccountContext
  );
  const cost = props.cost;
  const id = props.id;
  useEffect(() => {
    if (props.downlineIds.length != 0) {
      if (props.downlineIds.length === 1) {
        setExist1(true);
        addressToId(props.downlineIds[0]);
        console.log(downline1);
      } else if (props.downlineIds.length === 2) {
        setExist2(true);
      }
    }
  });

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
  };

  const addressToId = async (_address) => {
    await loadWeb3();
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    const res = await contract.methods.users(_address).call();
    const userId = res[0];
    setDownline1(userId);
  };

  if (props.bought) {
    return (
      <>
        <div className="holder">
          <div
            className="matrix-head"
            onClick={() => {
              setMatrixView("x3");
            }}
          >
            <div className="level">{props.id}</div>
            <div className="id">{props.cost}</div>
          </div>
          <ReferalLine exist1={exist1} exist2={exist2} exist3={false} />
        </div>
        <style jsx>{`
          .holder {
            width: auto;
            width: 200px;
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
            <button
              className="buy-level"
              onClick={async () => {
                await buyLevel(1, id, cost, props.account);
              }}
            >
              Buy for {props.cost}
            </button>
          </div>
          <ReferalLine exist1={exist1} exist2={exist2} exist3={false} />
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
            margin: auto auto;
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
