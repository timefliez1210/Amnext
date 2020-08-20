import React, { Component } from "react";
import AccountContext from "../AccountContext";
import { ABI, ADDRESS } from "../../ethereum/web3";
import Web3 from "web3";
import Router from "next/router";

class ManualLogin extends Component {
  static contextType = AccountContext;

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    this.setState({ account: this.context.account });
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    this.setState({ contract });
    const isExists = await contract.methods
      .isUserExists(this.state.account)
      .call();
    this.setState({ isExist: isExists });
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

  async login() {
    try {
      await this.loadWeb3();
      await this.loadBlockchainData();
      if (this.state.isExist) {
        Router.push("/dashboard");
      } else {
        window.alert(
          "The user you are looking for doesn't exist. Try another one!"
        );
      }
    } catch (err) {
      window.alert("Invalid ETH ADDRESS, Checksum doesnt match");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false,
    };
  }
  render() {
    const { account, setAccount } = this.context;
    return (
      <>
        <form
          className="manual"
          onSubmit={async (event) => {
            event.preventDefault();
            const newUser = this.state.account;
            setAccount(newUser);
            this.login();
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              const address = this.input.value.toString();
              this.setState({
                account: address,
              });
            }}
            ref={(input) => {
              this.input = input;
            }}
            placeholder="Wallet Address or ID..."
          />
          <button className="manual-btn">
            <b>Viewing</b>
          </button>
        </form>
        <style jsx>{`
          .manual-btn {
            background: rgb(55, 214, 255);
            background: linear-gradient(
              223deg,
              rgba(55, 214, 255, 1) 0%,
              rgba(16, 83, 245, 1) 46%
            );
            box-shadow: none;
            outline: none;
            border: none;
          }
          input {
            width: 100%;
            background: rgba(16, 1, 62, 1);
            box-shadow: none;
            outline: none;
            border: none;
            padding: 20px 20px;
            border-radius: 30px;
            font-size: 1.2em;
            margin: 30px 0;
            color: grey;
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

export default ManualLogin;
