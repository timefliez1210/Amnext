import FirstLine from "./x4structure/FirstLine";
import SecondLine from "./x4structure/SecondLine";
import React, { useState, useEffect } from "react";
import { loadWeb3 } from "../../utils/utility";
import { ABI, ADDRESS } from "../../utils/globals";
import Web3 from "web3";

const X4matrix = (props) => {
  const [exist1, setExist1] = useState(false);
  const [exist2, setExist2] = useState(false);
  const [exist3, setExist3] = useState(false);
  const [exist4, setExist4] = useState(false);
  const [exist5, setExist5] = useState(false);
  const [exist6, setExist6] = useState(false);
  const [loading, setLoading] = useState(0);
  const cost = props.cost;
  const id = props.id;

  useEffect(() => {
    if (props.structure[1].length != 0) {
      if (props.structure[1].length === 1) {
        setExist1(true);
      } else if (props.structure[1].length === 2) {
        setExist1(true);
        setExist2(true);
      }
    }
    if (props.structure[2].length != 0) {
      if (props.structure[1].length === 1) {
        setExist3(true);
      } else if (props.structure[1].length === 2) {
        setExist3(true);
        setExist4(true);
      } else if (props.structure[1].length === 3) {
        setExist3(true);
        setExist4(true);
        setExist5(true);
      } else if (props.structure[1].length === 4) {
        setExist3(true);
        setExist4(true);
        setExist5(true);
        setExist6(true);
      }
    }
  });

  const buyLevel = async () => {
    try {
      await loadWeb3();
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(ABI, ADDRESS);

      await contract.methods
        .buyNewLevel(2, id)
        .send({
          value: cost,
          from: props.account,
        })
        .then(function (receipt) {
          window.alert("Succes!");
          setLoading(1);
        });
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  };

  if (props.bought) {
    return (
      <>
        <div className="holder">
          <div className="matrix-head">
            <div className="level">{props.id}</div>
            <div className="id">{props.cost}</div>
          </div>
          <FirstLine exist1={exist1} exist2={exist2} />
          <div className="squares">
            <div className="struc"></div>
            <div className="struc"></div>
          </div>
          <SecondLine
            exist3={exist3}
            exist4={exist4}
            exist5={exist5}
            exist6={exist6}
          />
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

          .items4 {
            display: grid;
            grid-template-columns: 50px 50px 50px 50px;
          }
          .downlines4 {
            display: grid;
            grid-template-columns: 50px 50px 50px 50px;
          }
          .circle {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1.5px solid #1ea6ff;
            background: #1ea6ff;
            margin: auto auto;
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
                await buyLevel();
              }}
            >
              Buy for {props.cost}
            </button>
          </div>
          <FirstLine exist={props.bought} />
          <div className="squares">
            <div className="struc"></div>
            <div className="struc"></div>
          </div>
          <SecondLine exist={props.bought} />
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
          }
          .level {
            background: #338eff;
            padding: 20px 20px;
            border-radius: 20px;
          }
          .id {
            padding: 20px 20px;
          }

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

          .items4 {
            display: grid;
            grid-template-columns: 50px 50px 50px 50px;
          }
          .downlines4 {
            display: grid;
            grid-template-columns: 50px 50px 50px 50px;
          }
          .circle {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1.5px solid #1ea6ff;
            background: #1ea6ff;
            margin: auto auto;
          }
        `}</style>
      </>
    );
  }
};

export default X4matrix;

// #fd8576
