import Web3 from "web3";
import { ABI, ADDRESS } from "../../ethereum/web3";

export async function loadBlockchainData() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const accounts = await web3.eth.getAccounts();
  this.setState({ account: accounts[0] });
  const contract = new web3.eth.Contract(ABI, ADDRESS);
  this.setState({ contract });
  const isExists = await contract.methods
    .isUserExists(this.state.account)
    .call();
  this.setState({ isExist: isExists });
}
