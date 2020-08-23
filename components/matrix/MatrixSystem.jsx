import React, { Component } from "react";
import X3MatrixHolder from "./X3MatrixHolder";
import X4MatrixHolder from "./X4MatrixHolder";
import Web3 from "web3";
import { ABI, ADDRESS } from "../../utils/globals";
import { loadWeb3 } from "../../utils/utility";

class MatrixSystem extends Component {
  async UNSAFE_componentWillMount() {
    try {
      this.setState({ account: this.props.account });
      await loadWeb3();
      await this.loadBlockchainData();
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  }

  async loadBlockchainData() {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      this.setState({ contract });

      const costs = await contract.methods.registrationCost().call();

      this.setState({ cost: costs });
      // Matrix Calls for the X3
      const x3 = [];
      for (let i = 1; i < 13; i++) {
        const res = await contract.methods
          .usersX3Matrix(this.state.account, i)
          .call();
        x3.push({
          level: i,
          userX3: res,
        });
      }
      const elementsX3 = [];
      var _cost = this.state.cost / 2;
      for (let i = 0; i < 12; i++) {
        let j = i + 1;

        const downlines = x3[i].userX3[1].length;
        elementsX3.push({
          id: j,
          number: downlines,
          key: j,
          cost: _cost,
        });
        _cost = _cost * 2;
      }
      const x3Exist = [];
      for (let i = 1; i < 13; i++) {
        const res = await contract.methods
          .usersActiveX3Levels(this.state.account, i)
          .call();
        x3Exist.push({
          id: i,
          userX3Exist: res,
        });
      }
      const x3Payload = this.x3Infos(x3Exist, elementsX3);
      this.setState({ x3Payload });

      // Matrix Calls for the X4
      var _x4cost = this.state.cost / 2;
      const x4Exist = [];
      for (let i = 1; i < 13; i++) {
        const res = await contract.methods
          .usersActiveX6Levels(this.state.account, i)
          .call();
        x4Exist.push({
          id: i,
          userX4Exist: res,
          key: i,
          cost: _x4cost,
        });
        _x4cost = _x4cost * 2;
      }
      const x6 = [];
      for (let i = 1; i < 13; i++) {
        const res = await contract.methods
          .usersX6Matrix(this.state.account, i)
          .call();
        x6.push({
          id: i,
          userX6: res,
        });
      }

      const x6Payload = this.x3Infos(x4Exist, x6);
      this.setState({ x6Payload });
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  }

  // Merging X3 quereries into 1 Payload
  x3Infos(arr1, arr2) {
    return arr1.map((item, i) => {
      if (item.id === arr2[i].id) {
        return Object.assign({}, item, arr2[i]);
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      parnterCount: "",
      cost: "",
    };
  }
  render() {
    return (
      <>
        <X3MatrixHolder
          struc={this.state.x3Payload}
          account={this.state.account}
        />
        <X4MatrixHolder
          struc={this.state.x6Payload}
          account={this.state.account}
        />
      </>
    );
  }
}

export default MatrixSystem;
