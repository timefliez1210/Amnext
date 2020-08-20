import React, { Component } from "react";
import Web3 from "web3";
import { ABI, ADDRESS } from "../../ethereum/web3";
import Router from "next/router";
import AccountContext from "../AccountContext";

class AutoLogin extends Component {
  static contextType = AccountContext;

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const contract = new web3.eth.Contract(ABI, ADDRESS);
    this.setState({ contract });
    const isExists = await contract.methods
      .isUserExists(this.state.account)
      .call();
    this.setState({ isExist: isExists });
    const costs = await contract.methods.registrationCost().call();
    this.setState({ cost: costs });
    this.setState({ isLoading: false });
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false,
      cost: "",
      loading: false,
      refererAddress: "0xf2aA26723ed7b099845afE69FA4929A46BC00245",
    };
  }

  async register(_refererAddress) {
    this.setState({ loading: true });
    await this.loadWeb3();
    await this.loadBlockchainData();
    if (this.state.isExist) {
      Router.push("/dashboard");
      this.setState({ loading: false });
    } else {
      await this.state.contract.methods
        .registrationExt(_refererAddress)
        .send({
          value: this.state.cost,
          from: this.state.account,
        })
        .then(function (receipt) {
          Router.push("/dashboard");
          this.setState({ loading: false });
        });
    }
  }
  render() {
    const { account, setAccount } = this.context;
    const isLoading = this.state.loading;
    return (
      <>
        <form
          className="automatic"
          onSubmit={async (event) => {
            event.preventDefault();
            await this.register(this.state.refererAddress);
            const newUser = this.state.account;
            setAccount(newUser);
          }}
        >
          <button className="auto">
            {!isLoading ? <b>Authorisation</b> : <b>Loading</b>}
          </button>
        </form>
        <style jsx>{`
          .auto {
            background: rgb(0, 237, 47);
            background: linear-gradient(
              306deg,
              rgba(0, 237, 47, 1) 29%,
              rgba(0, 179, 35, 1) 64%,
              rgba(0, 179, 35, 1) 83%
            );
            box-shadow: none;
            outline: none;
            border: none;
          }
          button {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            border-radius: 30px;
            color: white;
            font-size: 1.2em;
          }
        `}</style>
      </>
    );
  }
}

export default AutoLogin;
