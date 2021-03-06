import React, { Component } from "react";
import X3MatrixHolder from "./X3MatrixHolder";
import X4MatrixHolder from "./X4MatrixHolder";
import Web3 from "web3";
import { ABI, ADDRESS } from "../../utils/globals";
import { loadWeb3 } from "../../utils/utility";
import X3MatrixHolderDetail from "./X3MatrixHolderDetail";

// Context API
import AccountContext from "../../Layout/AccountContext";

class MatrixSystem extends Component {
  static contextType = AccountContext;
  async componentDidMount() {
    try {
      this.setState({ account: this.props.account });
      await loadWeb3();
      await this.loadBlockchainData();
      this.loadX3();
      this.loadX4();
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
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  }

  // Merging Matrix quereries into 1 Payload
  x3Infos(arr1, arr2) {
    return arr1.map((item, i) => {
      if (item.id === arr2[i].id) {
        return Object.assign({}, item, arr2[i]);
      }
    });
  }

  // Matrix Functions
  async loadX3() {
    try {
      const x3 = [];
      for (let i = 1; i < 13; i++) {
        const res = await this.state.contract.methods
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
        const idArray = x3[i].userX3[1];
        elementsX3.push({
          id: j,
          number: downlines,
          downlineIds: idArray,
          key: j,
          cost: _cost,
        });
        _cost = _cost * 2;
      }

      const x3Exist = [];
      for (let i = 1; i < 13; i++) {
        const res = await this.state.contract.methods
          .usersActiveX3Levels(this.state.account, i)
          .call();
        x3Exist.push({
          id: i,
          userX3Exist: res,
        });
      }
      const x3Payload = this.x3Infos(x3Exist, elementsX3);
      this.setState({ x3Payload });
    } catch (err) {
      window.alert("Something went wrong fetching your X3. Please reload");
    }
  }

  async loadX4() {
    try {
      var _x4cost = this.state.cost / 2;
      const x4Exist = [];
      for (let i = 1; i < 13; i++) {
        const res = await this.state.contract.methods
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
        const res = await this.state.contract.methods
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
      window.alert("Something went wrong fetching your X4. Please Reload.");
    }
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
    const { detailViewAccount, setDetailViewAccount } = this.context;
    const { matrixView, setMatrixView } = this.context;
    if (this.context.matrixView === "x3") {
      return (
        <>
          <X3MatrixHolderDetail />
        </>
      );
    } else if (this.state.component === "x4") {
      return (
        <>
          <button
            onClick={() => {
              this.setState({ component: "main" });
            }}
          >
            x4
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              setMatrixView("x3");
            }}
          >
            x4
          </button>
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
}

export default MatrixSystem;
