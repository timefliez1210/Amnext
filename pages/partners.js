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

class Partners extends Component {
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
                  <h1>Partners</h1>
                  <div className="header-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <h2>Search by ID | Wallet</h2>
                  <form>
                    <input placeholder="Search.." />
                    <button>Submit</button>
                  </form>

                  <form className="link-holder">
                    <input placeholder="Hi hier kommt dann der link" />
                    <button className="copy">Copy</button>
                  </form>

                  <p>
                    Affiliate link for distribution of registration of partners
                  </p>
                  <div className="header">
                    <p>ID</p>
                    <p>Partners</p>
                    <p>Profit</p>
                    <p>x3/x4</p>
                    <p>Wallet</p>
                    <p>Registration Date</p>
                  </div>
                </div>
              </div>

              <style jsx>{`
                .link-holder {
                  width: 100%;
                  margin: 30px auto;
                  display: inline-flex;
                }
                .copy {
                  background: rgb(31, 168, 255);
                  background: linear-gradient(
                    223deg,
                    rgba(31, 168, 255, 1) 22%,
                    rgba(19, 108, 255, 1) 47%
                  );
                }
                .header {
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr;
                  background: rgba(28, 22, 85, 1);
                  border-radius: 20px;
                  padding: 10px 20px;
                }
                form {
                  width: 100%;
                }
                input {
                  border: none;
                  outline: none;
                  background: rgba(28, 22, 85, 1);
                  width: 70vw;
                  max-width: 400px;
                  border-radius: 20px;
                  line-height: 3em;
                  padding: 0 20px;
                  color: white;
                  font-style: bold;
                  font-size: 1.2em;
                }
                button {
                  border: none;
                  outline: none;
                  background: rgba(28, 22, 85, 1);
                  color: white;
                  font-style: bold;
                  font-size: 1.2em;
                  padding: 18px 30px;
                  margin-left: 20px;
                  border-radius: 20px;
                }
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

export default Partners;