import React, { Component } from "react";
import X3MatrixHolder from "./X3MatrixHolder";
import X4MatrixHolder from "./X4MatrixHolder";
import Web3 from "web3";
import { ABI, ADDRESS } from "../../utils/globals";
import { loadWeb3 } from "../../utils/utility";

class MatrixSystem extends Component {
  async UNSAFE_componentWillMount() {
    this.setState({ account: this.props.account });
    await loadWeb3();
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      this.setState({ contract });

      // Matrix Calls
      const costs = await contract.methods.registrationCost().call();
      const _costs = web3.utils.fromWei(costs, "ether");
      this.setState({ cost: _costs });
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
      const elements = [];
      for (let i = 0; i < 12; i++) {
        let j = i + 1;
        const downlines = x3[i].userX3[1].length;
        elements.push({
          id: j,
          number: downlines,
          key: j,
          cost: (this.state.cost / 2) * j,
        });
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
      const x3Payload = this.x3Infos(x3Exist, elements);
      this.setState({ x3Payload });
    } catch (err) {
      window.alert(err);
    }
  }

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
        <X3MatrixHolder struc={this.state.x3Payload} />
        <X4MatrixHolder cost={this.state.cost} />
      </>
    );
  }
}

export default MatrixSystem;
