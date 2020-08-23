import React, { Component } from "react";
import Web3 from "web3";
import { ABI, ADDRESS } from "../utils/globals";
import { loadWeb3 } from "../utils/utility";
import Router from "next/router";
import Spinner from "../components/Spinner";
import Navigation from "../components/Navigation";
import InfoHeader from "../components/InfoHeader";
import Sidebar from "../components/sidebar/Sidebar";

// Context API
import AccountContext from "../components/AccountContext";

class Office extends Component {
  static contextType = AccountContext;

  async UNSAFE_componentWillMount() {
    this.setState({ account: this.context.account });
    await loadWeb3();
    await this.loadBlockchainData();
    this.setState({ loading: false });
  }

  async loadBlockchainData() {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      this.setState({ contract });
      const address = ADDRESS;
      this.setState({ address });

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

      // Matrix Calls
      const costs = await contract.methods.registrationCost().call();
      this.setState({ cost: costs });

      // Error Catch -> Fetch the new Data directly from web3 provider after reload
    } catch (err) {
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
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: true,
      userIds: "",
      loading: true,
      totalUsers: "",
      parnterCount: "",
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
                  <h1>Hallo vom office</h1>
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

export default Office;