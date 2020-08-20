import React, { Component } from "react";
import Web3 from "web3";
import { ABI, ADDRESS } from "../ethereum/web3";
import Router from "next/router";
import Spinner from "../components/Spinner";
import Navigation from "../components/Navigation";
import InfoHeader from "../components/InfoHeader";
import Sidebar from "../components/sidebar/Sidebar";
import X3MatrixHolder from "../components/matrix/X3MatrixHolder";
import X4MatrixHolder from "../components/matrix/X4MatrixHolder";

class Dashboard extends Component {
  async UNSAFE_componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.setState({ loading: false });
  }

  async loadBlockchainData() {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      this.setState({ contract });
      const address = ADDRESS;
      this.setState({ address });
      const isExists = await contract.methods
        .isUserExists(this.state.account)
        .call();
      this.setState({ isExist: isExists });

      // Bundled Promises
      const userId = await this.state.contract.methods
        .users(this.state.account)
        .call();
      this.setState({
        userIds: userId.id,
        parnterCount: userId.partnersCount,
      });
      const userCount = await this.state.contract.methods.lastUserId().call();
      this.setState({ totalUsers: userCount });
      const balance = await this.state.contract.methods
        .balances(this.state.account)
        .call();
      this.setState({ balance });

      // Error Catch
    } catch (err) {
      console.log(err);
      window.alert("Please check if you have connected to the MATIC Chain");
    }
  }

  async loadWeb3() {
    try {
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
    } catch (err) {
      window.alert("Trouble connecting to you web3 browser...");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false,
      userIds: "",
      parnterCount: "",
      loading: true,
      totalUsers: "",
    };
  }

  render() {
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      if (this.state.isExist === true) {
        return (
          <>
            <Navigation />
            <div className="dashboard">
              <InfoHeader totalUsers={this.state.totalUsers} />
              <div className="pagination">
                <div className="small-box">
                  <Sidebar
                    userIds={this.state.userIds}
                    partnersCount={this.state.parnterCount}
                    account={this.state.account}
                    address={this.state.address}
                    balance={this.state.balance}
                  />
                </div>
                <div className="big-box">
                  <X3MatrixHolder />
                  <X4MatrixHolder />
                </div>
              </div>

              <style jsx>{`
                .dashboard {
                  background: rgba(16, 1, 62, 1);
                  width: 100vw;
                  max-width: 1420px;
                  margin: auto auto;
                  padding: 5px;
                }
                .pagination {
                  margin-top: 2vh;
                  display: grid;
                  grid-template-columns: 30% 65%;
                  grid-gap: 5%;
                }
                @media only screen and (max-width: 900px) {
                  .pagination {
                    grid-template-columns: 1fr;
                    grid-gap: 5%;
                  }
                }
              `}</style>
            </div>
          </>
        );
      } else {
        Router.push("/login");
      }
    }
  }
}

export default Dashboard;
